<template>
  <div class="card">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <router-link :to="{ 
          name: 'Room', 
          params: { title: `${room.title}`, id: `${room.id}` } 
          }">
          <H3>{{ room.title }}</H3>
        </router-link>
      </li>
    </ul>
     
  </div>
</template>

<script>
export default {
  name: "Bucket",
  props: ["room"],
};
</script>
<style lang="scss" scoped>
.title {
  min-width: 260px;
}
</style>
