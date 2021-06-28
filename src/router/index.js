import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../components/Home.vue";

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
                name: 'welcome',
                path: 'welcome',
                component: () => import('../views/Welcome.vue')
            }
        ]
    },
    {
        name: 'login',
        path: '/login',
        mata: {
            title: '登录'
        },
        component: () => import('../views/Login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
