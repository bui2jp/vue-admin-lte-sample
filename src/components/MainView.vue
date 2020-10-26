<template>
<div class="wrapper">

  <my-header></my-header>

  <my-sidebar></my-sidebar>


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
  }
}
</script>

<style scoped>

</style>