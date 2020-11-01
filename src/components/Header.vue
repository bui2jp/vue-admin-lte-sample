<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
      <li class="nav-item">
        <p class="nav-link"><i class="far fa-thumbs-up"></i> : {{ count }}</p>
      </li>
      <li class="nav-item">
        <p class="nav-link"><i class="far fa-thumbs-down"></i> : {{ count_bad }}</p>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <button class="nav-link" data-widget="control-sidebar" @click="sign_out">
          <!-- <i class="fas fa-th-large"></i> -->
          <i class="fas fa-sign-out-alt"></i> Sign Out
        </button>
      </li>
    </ul>

  </nav>
  <!-- /.navbar -->
</template>

<script lang="js">
// import cognito from '../aws_cognito/cognito'
// // eslint-disable-next-line
// import JQuery from 'jquery'
// let $ = JQuery
export default {
  name: 'my-header',
  methods: {
    // collapedSidebar: function () {
    //   //サイドメニューの開閉
    //   console.log('collapedSidebar start')
    //   $('body').toggleClass('sidebar-collapse')
    // },
    sign_out: function(){
      console.log('sign_out start')

      //Vuex.StoreのmyCognito.logout()
      this.$store.commit('logoutCognito')
      this.$router.push({ path: '/login' })
    }
  },
  computed:{ //
    count(){
      // `this` は vm インスタンスを指します
      return this.$store.state.count
    },
    count_bad(){
      // `this` は vm インスタンスを指します
      return this.$store.state.bad_count
    }    
  }
}
</script>