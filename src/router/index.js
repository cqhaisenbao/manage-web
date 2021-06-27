import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../components/Home.vue";
import Welcome from "../components/Welcome.vue";

const routes = [
    {
        name: 'home',
        path: '/',
        meta: {
            title: '首页'
        },
        redirect: '/welcome',
        component: Home,
        children: [
            {
                name: '/welcome',
                path: 'welcome',
                component: Welcome
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
