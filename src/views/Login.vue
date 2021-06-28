<template>
    <div>
        login
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: "Login",
    mounted() {
        this.$request.get('/login').then(res => {
            console.log(res);
        });
    },
    setup() {
        return {};
    }
});
</script>

<style lang="scss" scoped>

</style>
