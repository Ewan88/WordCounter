import Vue from 'vue';
import WordCounter from './models/word_counter.js';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      text: "",
      count: 0
    },
    methods: {
      countWords(){
        if (this.text != ''){
          this.count = WordCounter(this.text);
        }
      }
    }
  });
});
