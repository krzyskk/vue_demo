<template>
  <div class="room-page">
    <div class="container page">
      <div class="row room-content">
        <div class="col-xs-12">
          <div>
            <h3>{{room.title}}</h3>
          </div>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <MessageEditor :id="id">
          </MessageEditor>
          <div class="card-messages">
            <Message v-for="(message, index) in filteredItems " :id="id" :message="message" :key="index">
            </Message>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  import store from "@/store";
  import MessageEditor from "@/components/Message/MessageEditor";
  import Message from "@/components/Message/Message";
  import {
    FETCH_ROOM,
    FETCH_MESSAGES
  } from "@/store/actions-type";
  
  import ActionCable from "actioncable";
  var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
  
  export default {
    name: "Room",
    props: {
      id: {
        type: String,
        required: true
      }
    },
    components: {
      MessageEditor,
      Message
    },
    created() {
      cable.subscriptions.create({
          channel: "RoomChannel",
          room: this.$route.params.id
        }, {
          connected: function() {
            console.log("connected");
          },
          disconnected: function() {
            console.log("disconnected");
          },
          received: (data) => {
            this.messages.unshift(data.message);
          }
        }),
        store.dispatch(FETCH_ROOM, this.$route.params.id),
        store.dispatch(FETCH_MESSAGES, this.$route.params.id)
    },
    computed: {
      ...mapGetters(["room", "messages"]),
      filteredItems: function(messages) {
        return this.messages.slice(0, 20);
      }
    },
    watch: {
      messages(newMessages, oldMessages) {
        console.log("nuevos");
        console.log("viejos")
      }
    }
  };
</script>

<style>
  .card-messages {
    margin-top: 15px !important;
  }
</style>

