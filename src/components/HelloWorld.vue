<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{msgFromFather}}</h1>
    <button v-on:click='doClick()'>show msg form father</button>
    <button v-on:click='tellFather()'>tell father</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      msg: "msg from component hellowold：Welcome to Your Vue.js Program",
      msgToFather: "hello father！I'm your son！"
    };
  },
  props: ["msgFromFather"],
  methods: {
    doClick: function() {
      alert(this.msgFromFather);
    },
    tellFather: function() {
      this.$emit("tellwords", this.msgToFather);
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
