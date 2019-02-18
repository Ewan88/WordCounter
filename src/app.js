import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      text: "",
      count: 0
    },
    methods: {
      countWords(text){
        this.count = this.text.split(" ").length;
      }
    }
  });
});
