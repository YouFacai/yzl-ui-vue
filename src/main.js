import { createApp } from 'vue'
import yzlUI from './packages/index.js';
import App from './App.vue'
let app = createApp(App);
app.use(yzlUI(app))
app.mount('#app')
