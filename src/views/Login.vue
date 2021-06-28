<template>
    <div class="login-wrapper">
        <div class="modal">
            <el-form ref="userForm" :model="user" status-icon :rules="rules">
                <div class="title">火星</div>
                <el-form-item prop="userName">
                    <el-input type="text" prefix-icon="el-icon-user" v-model="user.userName"/>
                </el-form-item>
                <el-form-item prop="userPwd">
                    <el-input type="password" prefix-icon="el-icon-view" v-model="user.userPwd"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="btn-login" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

export default {
    name: "Login",
    data() {
        return {
            user: {
                userName: '',
                userPwd: ''
            },
            rules: {
                userName: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                userPwd: [{required: true, message: '请输入密码', trigger: 'blur'}],
            }
        }
    },
    methods: {
        login() {
            this.$refs.userForm.validate(async (valid) => {
                if (valid) {
                    const res = await this.$api.login(this.user)
                    this.$store.commit('saveUserInfo', res)
                    await this.$router.push('./welcome')
                }
            })
        }
    }
};
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
