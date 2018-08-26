<template>
    <div class="Register">
        <div class="denglu">
            <img :src="require('@/assets/logo.png')" />
            <ul>
                <li><img :src="require('@/assets/username.png')" /><input type="text" placeholder="请输入密码" /></li>
                <li><img :src="require('@/assets/password.png')" /><input type="password" placeholder="请输入密码" /></li>
            </ul>
            <el-row>
                <el-button type="danger" @click="register">立即登录</el-button>
            </el-row>
            <div class="denglu_bott">
                <span class="span1"><input type="checkbox" checked="checked" id="inp" />
                    <label for="inp">记住密码</label>
                </span>
                <span class="span2">忘记密码?</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Register',
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        register() {
            this.$router.push({ path: '/component/index'})
            //   this.$router.push({path:'/Zanquanshenji/Zanquanshenjis'})
            // this.$router.push({path:'/HelloWorld/GSystemUnit'})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body,
html {
    width: 100%;
    height: 100%;
}

#app {
    width: 100%;
    height: 100%;
}

h1,
h2 {
    font-weight: normal;
}

li {
    list-style: none;
}

a {
    color: #42b983;
    text-decoration: none;
}

.systermadministorOne {
    width: 100%;
    height: 682px;
    margin: 0 auto;
}

.systermadministorOne>div {
    float: left;
}

.systermadministorOne_left {
    width: 150px;
    height: 100%;
}

.systermadministorOne_right {
    width: 85%;
    height: 100%;
}

.GContent {
    position: absolute;
    top: 82px;
    left: 175px;
    width: 1311px;
    height: 600px;
    background: #e9f0f5;
}

table {
    border-collapse: collapse;
}
</style>
<style lang="scss" scoped>
.Register {
    width: 100%;
    height: 100%;
    background: url('../../assets/register.png') no-repeat center; // background:url(require('@/assets/register.png')) no-repeat center;
    background-size: 100% 100%;
    .denglu {
        width: 30%;
        height: 50%;
        min-height: 290px;
        position: relative;
        top: 100px;
        left: 95px;
        background: #e9e9e9;
        text-align: center;
        img {}
        ul {
            width: 100%;
            li {
                input {
                    width: 60%;
                    height: 30px;
                    border: 0;
                    border-bottom: 1px solid #a0a0a0;
                    background: none;
                    margin: 10px 0;
                    padding: 3px 5px;
                    outline: none;
                }
            }
        }
        .el-row {
            width: 60%;
            display: inline-block;
            margin: 20px 0 20px 0;
            button {
                width: 100%;
            }
        }
        .denglu_bott {
            width: 60%;
            display: inline-block;
            .span1 {
                float: left;
                cursor: pointer;
            }
            .span2 {
                float: right;
                cursor: pointer;
            }
            label {
                cursor: pointer;
            }
        }
    }
}
</style>
