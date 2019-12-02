<template>
  <div>登录</div>
</template>

<script>
import { login } from "@/api/user";

export default {
  name: "loginForm",
  data() {
    return {
      loginForm: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    loginIn() {
      if (!this.loginForm.userName) {
        this.$toast.text("请输入账户", {
          center: false
        });
        return false;
      }
      if (!this.loginForm.password) {
        this.$toast.text("请输入密码", {
          center: false
        });
        return false;
      }
      login(this.loginForm).then(res => {
        if (res.data.code === 200) {
          // 登录成功
          this.$store.commit("setToken", res.data.data.token);
          this.$store.commit("setUserId", res.data.data.userId);
          this.$store.commit("setUserName", res.data.data.userName);
          this.$router.push({
            name: "record"
          });
        } else {
          this.$toast.text(res.data.msg, {
            center: false
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.input-box {
  position: relative;
  border-bottom: 1px solid #3a70f2;
  margin-bottom: 30px;
  padding-left: 30px;
  .icon {
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 18px;
    color: #4e7ceb;
  }
}
.login-btn {
  margin-top: 20px;
}
</style>
