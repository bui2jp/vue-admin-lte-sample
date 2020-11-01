<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Album 3</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <!-- <li class="breadcrumb-item"><a href="#">Home</a></li> -->
              <li class="breadcrumb-item">
                <router-link class="nav-link" to="/album1">
                  <a href="#">Home</a>
                </router-link>
              </li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">

          <!-- ここを繰り返す -->
          <div class="row">
              <div class="col-lg-4">
                <div class="card card-primary card-outline">
                  <div class="card-header">
                    <h5 class="m-0">Test</h5>
                  </div>
                  <img src="../assets/img/gopher.png" width="100px">
                  <button type="button" class="btn btn-sm btn-primary" @click="myButtonClick1">
                      <i class="far fa-thumbs-up"></i>
                  </button>
                  <button type="button" class="btn btn-sm btn-danger" @click="myButtonClick1Bad">
                      <i class="far fa-thumbs-down"></i>
                  </button>                  
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-primary card-outline">
                  <div class="card-header">
                    <h5 class="m-0">Test</h5>
                  </div>
                  <img src="../assets/img/gopher.png" width="100px">
                  <button type="button" class="btn btn-sm btn-primary" @click="myButtonClick2">
                      <i class="far fa-thumbs-up"></i>
                      <i class="far fa-thumbs-up"></i>
                  </button>
                  <button type="button" class="btn btn-sm btn-danger" @click="myButtonClick2Bad">
                      <i class="far fa-thumbs-down"></i>
                      <i class="far fa-thumbs-down"></i>
                  </button>                  
                </div>
              </div>              
          </div>

        <!-- </div> -->
        <!-- /.row -->

        <!-- /.container-fluid -->
      </div>
      <!-- /.content -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myItems: [
        { myTitle: "aaa1" }, 
        { myTitle: "aaa2" },
        { myTitle: "aaa3" },
        { myTitle: "aaa4" },
        { myTitle: "aaa5" }, 
        { myTitle: "aaa6" },
        { myTitle: "aaa7" },
        { myTitle: "aaa8" },
      ],
    };
  },
  methods:{
      myButtonClick1: function(){
          console.log('myButtonClick1 !!!')
          this.$store.commit('increment')
      },
      myButtonClick2: function(){
          console.log('myButtonClick2 !!!')
          this.$store.commit('increment')
          this.$store.commit('increment')          
      },
      myButtonClick1Bad: function(){
          console.log('myButtonClick1 !!!')
          this.$store.commit('increment_bad')
      },
      myButtonClick2Bad: function(){
          console.log('myButtonClick2 !!!')
          this.$store.commit('increment_bad')
          this.$store.commit('increment_bad')          
      }            

  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  width: 100%;
  margin: 0px;
  padding: 0px;
}

img {
    margin: 0 auto;
    padding: 15px;
}

button {
    width: 100px;
    margin: 10px auto 10px auto;
}
</style>