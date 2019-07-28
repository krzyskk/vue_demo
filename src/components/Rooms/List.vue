<template>
  <div>
    <div class="page-header">
      <h1>All rooms</h1>
        <router-link :to="{name: 'RoomNew'}" replace>
          <button type="button" class="btn btn-primary">Add new room</button>
        </router-link>
    </div>
    <div class="row">
      <Bucket v-for="room in rooms" :key="room.id" :room="room" :createdby="room.created_by"></Bucket>
    </div>
  </div>
</template>

<script>
import Bucket from "./Bucket";

export default {
  name: "List",
  data() {
    return {
      rooms: []
    };
  },
  created() {
    this.$http
      .get("/rooms")
      .then(res => {
        this.buildRoomList(res.data);
      })
      .catch(() => {
        alert("Something went wrong!");
      });
  },
  methods: {
    buildRoomList(data) {
      this.rooms = data;
    }
  },
  components: {
    Bucket
  }
};
</script>

<style lang="css">
.page-header {
  margin-bottom: 15px;
}
</style>