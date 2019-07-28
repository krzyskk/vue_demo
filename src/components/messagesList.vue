<template>
  <div>
    <template>
      <div>
        <li v-form={{ currentMessage }}
      </div>
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