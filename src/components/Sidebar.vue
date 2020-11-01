<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <!-- <router-link class="nav-link" to="/album1">
      <div class="brand-link">
        <img src="../assets/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">ゆるく</span>
      </div>
    </router-link> -->
    <a href="#" class="brand-link">
      <img src="../assets/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">サンプル</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-2">

        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link active">
              <!-- <i class="nav-icon fas fa-tachometer-alt"></i> -->
              <i class="nav-icon far fa-images"></i>
              <p>
                Album
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link class="nav-link" to="/album1">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Album1</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/album2">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Album2</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/album3">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Album3</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
// import JQuery from 'jquery'
// // eslint-disable-next-line
// let $ = JQuery
export default {
    nama: "my-sidebar",
}
</script>
