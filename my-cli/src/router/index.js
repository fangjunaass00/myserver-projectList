import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import ProjectOuterUI from "@/components/ProjectOuterUI";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "ProjectOuterUI",
      component: ProjectOuterUI
    }
  ]
});
