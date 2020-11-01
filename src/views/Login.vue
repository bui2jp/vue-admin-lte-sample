<template>
<div class="login-box" id="login-box">
  <div class="login-logo">
    <a href="#"><b>SignIn</b></a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <div>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="User Name" v-model="username">
          <div class="input-group-append">
            <div class="input-group-text">
              <!-- <span class="fas fa-envelope"></span> -->
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password" v-model="password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4" id="login-button">
            <button class="btn btn-primary btn-block" @click='clickLogin'>Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </div>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
</template>

<style scoped>
#login-box {
    margin: 50px auto 0 auto;
}
#login-button {
    margin: 0 20px 0 auto
}
</style>

<script>
import cognito from '../aws_cognito/cognito'

export default {
  //dataはオブジェクトを返す関数として実装する
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    clickLogin: function () {
      console.log("clickLogin !!!");
      
      let _app = this

      var myCognito = new cognito()
      _app.$store.commit('setCognito', myCognito)
      //https://qiita.com/daikiojm/items/b02c19cfea6766c308ca
      
      myCognito.login(this.username, this.password)
      //myCognito.login(this.username,this.password)
        .then( function(result){
          //メイン画面へ遷移
          console.log('go to top page')
          _app.$store.commit("doLogin", result);
          _app.$router.push({ path: '/album1' })
          console.log(result)
        })
        .catch( function(err){
          console.log('error' + JSON.stringify(err))
          alert('login error.')
        })
    }
  }
}
</script>