import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import Element from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import request from './utils/request'
import storage from './utils/storage'

const app = createApp(App)
//全局挂载
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.use(router).use(Element).mount('#app')
