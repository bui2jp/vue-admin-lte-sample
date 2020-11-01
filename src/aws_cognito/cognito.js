import {
    CognitoUserPool,
    CognitoUser,
    AuthenticationDetails,
 //   CognitoUserAttribute
  } from 'amazon-cognito-identity-js'
// import { Config, CognitoIdentityCredentials } from 'aws-sdk'


/**
 * Region: 'ap-northeast-1',  
 * UserPoolId: 'ap-northeast-1_XXXXXXXXX',
 * ClientId: 'YYYYYYYYYYYYYYYYYYYYYYYYYY',
 * IdentityPoolId: 'ap-northeast-1:XXXXXXXX-YYYY-XXXX-YYYY-XXXXXXXXXXX  
 */
export default class Cognito {
    /**
    * username, passwordでログイン
    */    
    login(username, password){
        console.log('start login')

        this.userPool = new CognitoUserPool({
            UserPoolId: 'ap-northeast-1_AgpsppnQ3',
            ClientId: '60brudu5gmc2rghgd19ul5uose'
        })
        const userData = { Username: username, Pool: this.userPool }
        const cognitoUser = new CognitoUser(userData)
        const authenticationData = { Username: username, Password: password }
        const authenticationDetails = new AuthenticationDetails(authenticationData)

        return new Promise((resolve, reject) => {
            cognitoUser.authenticateUser(authenticationDetails, {
              onSuccess: (result) => {
                // 実際にはクレデンシャルなどをここで取得する(今回は省略)
                console.log('login onSuccess : ' + result)
                console.log('getAccessToken: ' + result.getAccessToken().jwtToken)
                console.log('jwtToken: ' + result.getIdToken().jwtToken)
                resolve(result)
              },
              onFailure: (err) => {
                console.log('login onFailure : ' + JSON.stringify(err))                  
                reject(err)
              }
            })
          })
    }

    logout(){
        console.log("start logout.")
        this.userPool = new CognitoUserPool({
          UserPoolId: 'ap-northeast-1_AgpsppnQ3',
          ClientId: '60brudu5gmc2rghgd19ul5uose'
        })
        if (this.userPool.getCurrentUser()){
          //サインアウトで無効になるのは、アクセストークンと更新トークンだけです。IDトークンは無効になりません。
          //https://stackoverflow.com/questions/45545176/is-it-possible-to-revoke-aws-cognito-idtoken
          //ID トークンの有効期限 60分
          this.userPool.getCurrentUser().signOut()
        }
    }   
}

/**
 * // Amazon Cognito 認証情報プロバイダーを初期化します
AWS.config.region = 'ap-northeast-1'; // リージョン
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-1:8c5f173f-0070-4b9e-bdb9-5cdcffadbd1e',
});
 */