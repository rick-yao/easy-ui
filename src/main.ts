import { createApp } from 'vue'
import {createWebHashHistory, createRouter, RouteRecordRaw} from 'vue-router';
import App from './App.vue'
import Rick from './components/Rick.vue';
import Rick2 from './components/Rick2.vue';
const routes: RouteRecordRaw[] = [
    {path:'/',component: Rick},
    {path:'/rick2',component:Rick2}
]
const history =  createWebHashHistory()
const router = createRouter({
    history:history,
    routes:routes
})
const app = createApp(App)
app.use(router)
app.mount('#app')
