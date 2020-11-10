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
    <div>
      <h3>{{ postTitle }}</h3>



          <div class="col-md-6">
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Date picker</h3>
              </div>
              <div class="card-body">
                <!-- Date -->
                <div class="form-group">
                  <label>Date:</label>
                    <div class="input-group date" id="reservationdate" data-target-input="nearest">
                        <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate"/>
                        <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                            <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                        </div>
                    </div>
                </div>
                <!-- /.form group -->
                <!-- Date range -->
                <div class="form-group">
                  <label>Date range:</label>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="far fa-calendar-alt"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control float-right" id="reservation">
                  </div>
                  <!-- /.input group -->
                </div>
                <!-- /.form group -->

                <!-- Date and time range -->
                <div class="form-group">
                  <label>Date and time range:</label>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="far fa-clock"></i></span>
                    </div>
                    <input type="text" class="form-control float-right" id="reservationtime">
                  </div>
                  <!-- /.input group -->
                </div>
                <!-- /.form group -->

                <!-- Date and time range -->
                <div class="form-group">
                  <label>Date range button:</label>

                  <div class="input-group">
                    <button type="button" class="btn btn-default float-right" id="daterange-btn">
                      <i class="far fa-calendar-alt"></i> Date range picker
                      <i class="fas fa-caret-down"></i>
                    </button>
                  </div>
                </div>
                <!-- /.form group -->
              </div>
                <div class="card-footer">
                  Visit <a href="https://tempusdominus.github.io/bootstrap-4/Usage/">tempusdominus </a> for more examples and information about
                  the plugin.
                </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->

            <!-- iCheck -->
            <div class="card card-success">
              <div class="card-header">
                <h3 class="card-title">iCheck Bootstrap - Checkbox &amp; Radio Inputs</h3>
              </div>
              <div class="card-body">
                <!-- Minimal style -->
                <div class="row">
                  <div class="col-sm-6">
                    <!-- checkbox -->
                    <div class="form-group clearfix">
                      <div class="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary1" checked>
                        <label for="checkboxPrimary1">
                        </label>
                      </div>
                      <div class="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary2">
                        <label for="checkboxPrimary2">
                        </label>
                      </div>
                      <div class="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary3" disabled>
                        <label for="checkboxPrimary3">
                          Primary checkbox
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <!-- radio -->
                    <div class="form-group clearfix">
                      <div class="icheck-primary d-inline">
                        <input type="radio" id="radioPrimary1" name="r1" checked>
                        <label for="radioPrimary1">
                        </label>
                      </div>
                      <div class="icheck-primary d-inline">
                        <input type="radio" id="radioPrimary2" name="r1">
                        <label for="radioPrimary2">
                        </label>
                      </div>
                      <div class="icheck-primary d-inline">
                        <input type="radio" id="radioPrimary3" name="r1" disabled>
                        <label for="radioPrimary3">
                          Primary radio
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Minimal red style -->
                <div class="row">
                  <div class="col-sm-6">
                    <!-- checkbox -->
                    <div class="form-group clearfix">
                      <div class="icheck-danger d-inline">
                        <input type="checkbox" checked id="checkboxDanger1">
                        <label for="checkboxDanger1">
                        </label>
                      </div>
                      <div class="icheck-danger d-inline">
                        <input type="checkbox" id="checkboxDanger2">
                        <label for="checkboxDanger2">
                        </label>
                      </div>
                      <div class="icheck-danger d-inline">
                        <input type="checkbox" disabled id="checkboxDanger3">
                        <label for="checkboxDanger3">
                          Danger checkbox
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <!-- radio -->
                    <div class="form-group clearfix">
                      <div class="icheck-danger d-inline">
                        <input type="radio" name="r2" checked id="radioDanger1">
                        <label for="radioDanger1">
                        </label>
                      </div>
                      <div class="icheck-danger d-inline">
                        <input type="radio" name="r2" id="radioDanger2">
                        <label for="radioDanger2">
                        </label>
                      </div>
                      <div class="icheck-danger d-inline">
                        <input type="radio" name="r2" disabled id="radioDanger3">
                        <label for="radioDanger3">
                          Danger radio
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Minimal red style -->
                <div class="row">
                  <div class="col-sm-6">
                    <!-- checkbox -->
                    <div class="form-group clearfix">
                      <div class="icheck-success d-inline">
                        <input type="checkbox" checked id="checkboxSuccess1">
                        <label for="checkboxSuccess1">
                        </label>
                      </div>
                      <div class="icheck-success d-inline">
                        <input type="checkbox" id="checkboxSuccess2">
                        <label for="checkboxSuccess2">
                        </label>
                      </div>
                      <div class="icheck-success d-inline">
                        <input type="checkbox" disabled id="checkboxSuccess3">
                        <label for="checkboxSuccess3">
                          Success checkbox
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <!-- radio -->
                    <div class="form-group clearfix">
                      <div class="icheck-success d-inline">
                        <input type="radio" name="r3" checked id="radioSuccess1">
                        <label for="radioSuccess1">
                        </label>
                      </div>
                      <div class="icheck-success d-inline">
                        <input type="radio" name="r3" id="radioSuccess2">
                        <label for="radioSuccess2">
                        </label>
                      </div>
                      <div class="icheck-success d-inline">
                        <input type="radio" name="r3" disabled id="radioSuccess3">
                        <label for="radioSuccess3">
                          Success radio
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                Many more skins available. <a href="https://bantikyan.github.io/icheck-bootstrap/">Documentation</a>
              </div>
            </div>
            <!-- /.card -->

            <!-- Bootstrap Switch -->
            <div class="card card-secondary">
              <div class="card-header">
                <h3 class="card-title">Bootstrap Switch</h3>
              </div>
              <div class="card-body">
                <input type="checkbox" name="my-checkbox" checked data-bootstrap-switch>
                <input type="checkbox" name="my-checkbox" checked data-bootstrap-switch data-off-color="danger" data-on-color="success">
              </div>
            </div>
            <!-- /.card -->
          </div>



    </div>    
  </div>
</template>

<script>
import axios from 'axios'
//const axios = require('axios');
//import $ from 'jquery'
// let $ = JQuery
// JQuery(function () {
//   console.log('jQuery start')
//   JQuery('#datetimepicker1').datetimepicker();
// });
import jQuery from 'jquery'
let $ = jQuery
// $('#datetimepicker1').on('click', function() {
//         console.log('jquery click start')
//       })
// $('#reservationdate').datetimepicker({
//         format: 'L'
// });

import moment from "moment";
// console.log(moment)
import 'admin-lte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css'
import 'admin-lte/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js'
import 'admin-lte/plugins/daterangepicker/daterangepicker.css'
import 'admin-lte/plugins/daterangepicker/daterangepicker.js'


export default {
  mounted: function(){
    //Date range picker
    $('#reservationdate').on('click', function() {
      console.log('jquery click start')
    })
    $('#reservationdate').datetimepicker({
        format: 'L'
    })
    // //Date range picker
    $('#reservation').daterangepicker()
    //Date range picker with time picker
    $('#reservationtime').daterangepicker({
      timePicker: true,
      timePickerIncrement: 30,
      locale: {
        format: 'MM/DD/YYYY hh:mm A'
      }
    })

    //Date range as a button
    $('#daterange-btn').daterangepicker(
      {
        ranges   : {
          'Today'       : [moment(), moment()],
          'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month'  : [moment().startOf('month'), moment().endOf('month')],
          'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate  : moment()
      },
      function (start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
      }
    )    
  },
  props: ['postTitle'],
  data(){
    return {
      lambda_response:''
    }
  },
  methods:{
    clickCalender: function(){
      console.log('clickCalender start')
      $('#datetimepicker1').datetimepicker();
      
    },
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