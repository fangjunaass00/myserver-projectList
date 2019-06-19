// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import util from "@/util/util";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://47.99.166.160:82/";
Vue.prototype.$util = util;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
