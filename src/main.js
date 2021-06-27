import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import Element from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import config from './config'

const app = createApp(App)
app.use(router).use(Element).mount('#app')
