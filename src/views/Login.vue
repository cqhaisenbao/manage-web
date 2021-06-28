<template>
    <div class="login-wrapper">
        <div class="modal">
            <el-form>
                <div class="title">火星</div>
                <el-form-item>
                    <el-input type="text" prefix-icon="el-icon-user"/>
                </el-form-item>
                <el-form-item>
                    <el-input type="password" prefix-icon="el-icon-view"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="btn-login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: "Login",
    setup() {
        return {};
    }
});
</script>

<style lang="scss">
.login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9fcff;
    width: 100vw;
    height: 100vh;

    .modal {
        width: 500px;
        padding: 50px;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 0 10px 3px #c7c9cb4d;

        .title {
            font-size: 50px;
            line-height: 1.5;
            text-align: center;
            margin-bottom: 30px;
        }

        .btn-login {
            width: 100%;
        }
    }
}
</style>
