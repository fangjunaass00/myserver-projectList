<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div @click="getAjax">点我发送ajax</div>
  </div>
</template>

<script>
var axios = require("axios");

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created: function() {
    this.$axios
      .get("/getjson", {})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    getAjax: function() {
      this.$axios({
        url: "/setjson",
        method: "GET",
        params: {
          ID: 123
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
