<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Album 2</h1>
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
        <ul>
          <!-- ここを繰り返す -->
          <div class="row">
            <li class="col-lg-4" v-for="item in myItems" :key="item.myTitle">
              <div>
                <div class="card card-primary card-outline">
                  <div class="card-header">
                    <h5 class="m-0">{{ item.myTitle }}</h5>
                  </div>
                  <img src="../assets/img/gopher.png" width="100px" />
                  <div id="like_dislike_btn">
                    <button
                      type="button"
                      class="btn btn-sm btn-primary"
                      @click="myButtonClick"
                    >
                      <i class="far fa-thumbs-up"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-danger"
                      @click="myButtonClickBad"
                    >
                      <i class="far fa-thumbs-down"></i>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </ul>
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
        { myTitle: "photo1" },
        { myTitle: "photo2" },
        { myTitle: "photo3" },
        { myTitle: "photo4" },
        { myTitle: "photo5" },
        { myTitle: "photo6" },
        { myTitle: "photo7" },
        { myTitle: "photo8" },
      ],
    };
  },
  methods: {
    myButtonClick: function () {
      console.log("myButtonClick !!!");
      this.$store.commit("increment");
    },
    myButtonClickBad: function () {
      console.log("myButtonClickBad !!!");
      this.$store.commit("increment_bad");
    },
  },
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
  width: 50px;
  margin: 10px 5px 10px 5px;
  float: left;
}

div#like_dislike_btn{
  margin: 0 auto;
  padding: 10px;
}
</style>