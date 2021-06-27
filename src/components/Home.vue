<template>
    <div>
        home
        <router-view></router-view>
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

</style>
