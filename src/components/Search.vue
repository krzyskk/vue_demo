<template>
  <div>
    <h1> search </h1> 
    <template>
      {{ currentMessage }}
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      currentMessage: Object 
    }
  }

</script>