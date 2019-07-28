<template>
  <div id="app">
    <template>
      <Navbar></Navbar>
    </template>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Navbar from "./components/Navbar/Navbar";
export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>
<style>
.container-fluid {
  padding-top: 10px;
}
</style>
