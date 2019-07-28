<template>
  <div id="app">
    <Header />
    <Search 
      :currentMessage="results[index]"
    />
    <messagesList 
      :currentMessage="messages[index]"
    />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Search from './components/Search.vue'

  export default {
    name: 'app',
    components: {
      Header, 
      Search
    },
    data() {
      return {
        messages: [], 
        results: [],
        index: 0  
      }
    },
    mounted: function() {
      fetch('http://localhost:3000/v1/search_message?query=' + "a", {
        method: 'get'
      })
        .then((response) => {
          return response.json()
        })
        .then((jsonData) => {
          this.results = jsonData;
      })
    },
    mounted: function() {
      fetch('http://localhost:3000/v1/messages', {
        method: 'get'
      })
        .then((response) => {
          return response.json()
        })
        .then((jsonData) => {
          this.messages = jsonData;
      })
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
