import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Website from "@/components/Website";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Website",
      component: Website
    }
  ]
});
