<template>
<div class="wrapper">

    <!-- v-ifにしたらサイドメニューが動かなくなる -->
    <div v-show="isLogin">      
      <my-sidebar></my-sidebar>
      <my-header></my-header>    
    </div>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <!-- /.content-wrapper -->

  <my-footer></my-footer>

</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'my-main',
  components: {
    'my-header' : Header ,
    'my-sidebar' : Sidebar,
    'my-footer' : Footer
  },
  computed:{ //
    isLogin(){
      // `this` は vm インスタンスを指します
      return this.$store.state.isLogin
    }    
  }  
}
</script>

<style scoped>

</style>