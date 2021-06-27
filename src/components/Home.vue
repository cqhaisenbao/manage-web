<template>
    <div class="basic-layout">
        <aside></aside>
        <main>
            <nav>
                <div class="bread">面包屑</div>
                <div class="user">用户</div>
            </nav>
            <div class="wrapper">
                <div class="main-page">
                    <router-view></router-view>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: "Home",
    setup() {
        return {};
    }
});
</script>

<style lang="scss" scoped>
.basic-layout {
    display: flex;

    aside {
        width: 200px;
        height: 100vh;
        background: #001529;
        color: #fff;
        overflow-y: auto;
        flex-shrink: 0;
        transition: width .25s;
    }

    main {
        flex-grow: 1;

        nav {
            height: 50px;
            line-height: 50px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
            padding: 0 20px;
        }

        .wrapper {
            background: #eef0f3;
            padding: 20px;
            height: calc(100vh - 50px);

            .main-page {
                background: #fff;
                height: 100%;
            }
        }
    }
}
</style>
