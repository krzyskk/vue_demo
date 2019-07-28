
<template>
  <div>
    <b-nav tabs>
      <b-nav-item disabled><b>Demo app</b></b-nav-item>
      <input type="text" v-model="query" placeholder="Search messages"/>
    </b-nav>
  </div>
</template>

<script>
  export default {
    props: {
      query: '' 
    }
  }
</script>