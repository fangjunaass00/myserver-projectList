import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import ProjectList from "@/components/ProjectList";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "ProjectList",
      component: ProjectList
    }
  ]
});
