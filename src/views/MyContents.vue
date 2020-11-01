<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Album 1</h1>
          </div><!-- /.col -->
          <button @click="callLambdaFunc">Call API</button>
          <p>{{lambda_response}}</p>
        </div><!-- /.row -->

      </div><!-- /.container-fluid -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
//const axios = require('axios');

export default {
  data(){
    return {
      lambda_response:''
    }
  },
  methods:{
    callLambdaFunc: function(){
      console.log('callLambdaFunc start.')
      //
      if ( !this.$store.state.cognito_user_session ){
        alert('not login.')

      }
      console.log(this.$store.state.cognito_user_session)
      let session = this.$store.state.cognito_user_session

      //このTokenを使ってAPIをコールする
      console.log(session.getIdToken().jwtToken)
      var myHeader = session.getIdToken().jwtToken
      //myHeader = myHeader+ 'a'
      axios.get('https://9gyux3n0gf.execute-api.ap-northeast-1.amazonaws.com/dev/test',
      {
        headers:{"Authorization": myHeader}    
      })
      .then(function (response) {
        // handle success
        console.log(response)
        this.lambda_response = response.data.statusCode + ':' +  response.data.body
      }.bind(this)) //ここでthisをbindしておくことでthenの中のthisを変更
    }
  }
}
</script>