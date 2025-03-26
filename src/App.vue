<template>
  <div id="app">
    <nav v-if="!isLoginPage">
      <Router-Link to ="/pos01">Quản lý sản phẩm</Router-Link>
      <Router-Link to ="/pos02">Nhập hàng</Router-Link>
      <Router-Link to ="/pos03">Lịch sử nhập</Router-Link>
      <Router-Link to ="/pos04">Tạo hóa đơn</Router-Link>
      <Router-Link to ="/pos05">Hóa đơn</Router-Link>
    </nav>
  <router-view/>
  </div>
</template>

<script>

  export default{
    name: 'App',
    computed:{
      isLoginPage(){
        return this.$route && this.$route.path === '/login';
      }
    }
  }
</script>