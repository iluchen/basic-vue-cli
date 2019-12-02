<template>
  <div class="login">
    <header></header>
    <div class="wrapper">
      <loginForm></loginForm>
    </div>
  </div>
</template>

<script>
import loginForm from "_/login-form";

export default {
  components: { loginForm }
};
</script>

<style lang="scss" scoped></style>
