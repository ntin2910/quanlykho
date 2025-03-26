
<template>
  <div class="login">
    <h2>Đăng Nhập</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Tài khoản:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Đăng Nhập</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // Xử lý đăng nhập ở đây
      console.log('Tài khoản:', this.username);
      console.log('Mật khẩu:', this.password);
      // Bạn có thể thêm logic xác thực ở đây
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>