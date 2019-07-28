import Vue from "vue";
import Vuex from "vuex";
import room from "./room";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    room
  }
});
