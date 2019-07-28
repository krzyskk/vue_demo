import Vue from "vue";
import Router from "vue-router";
import RoomsList from "@/components/Rooms/List";
import RoomNew from "@/views/Rooms/New";
import Room from "@/views/Rooms/Room";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Rooms",
      component: RoomsList
    },
    {
      path: "/rooms/new",
      name: "RoomNew",
      props: true,
      component: RoomNew
    },
    {
      path: "/rooms/:id",
      name: "Room",
      component: Room,
      props: true
    }
  ]
});
