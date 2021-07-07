import { createApp } from 'vue/dist/vue.esm-bundler.js'
import axios from 'axios'

var Counter;

axios.get('/public/data.json')
.then(response => {
  const data = response.data;
  Counter = {
    data() {
      return {
          counter: Object.keys(data.list).length
      }
    }
  };
  createApp(Counter).mount('#counter')
});
