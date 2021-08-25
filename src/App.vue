<template>
  <div id="app">
    <h1 v-text="msg"></h1>
    <input type="text" 
           v-model="newItem"
           v-on:keyup.enter='addNew'>
    <ul>
      <li v-for="item in items" 
          v-bind:class="{finished:item.isFinished}"
          v-on:click="toggleFinished(item)">
         {{item.label +"："+item.isFinished}}
      </li>
      <hello-a msgFromFather='msg from father：hello son!'
               v-on:tellwords='receiveMsg'></hello-a>
      <p>msg form son：{{msgFromSon}}</p>
    </ul>
  </div>
</template>

<script>
import Store from "./store";
import helloA from "./components/HelloWorld";

export default {
  name: "App",
  data: function() {
    return {
      msg: "This is a todo list",
      items: Store.fetch(),
      newItem: "",
      msgFromSon: "no msg form son"
    };
  },
  components: {
    helloA
  },
  watch: {
    items: {
      handler: function(items) {
        Store.save(items);
      },
      deep: true
    }
  },
  methods: {
    toggleFinished: function(item) {
      // console.log(item);
      item.isFinished = !item.isFinished;
    },
    addNew: function() {
      this.items.push({
        label: this.newItem,
        isFinished: false
      });
      this.newItem = "";
    },
    receiveMsg: function(msg) {
      this.msgFromSon = msg;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
}
.finished {
  text-decoration: line-through;
  color: #999;
}
</style>
