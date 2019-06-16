<template>
  <div class="project">
    <div class="project-title">项目列表</div>
    <list-item v-for="item in filedata.list" v-bind:key="item.title" v-bind:itemdata="item"></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem";
export default {
  name: "ProjectList",
  components: {
    "list-item": ListItem
  },
  data: function() {
    return {
      filedata: {
        title: "update",
        list: [
          {
            company: "dior",
            style:
              "background:#dcbfbf;font-size:15px;height:50px;padding-left:5%;",
            createDate: "2018-08-01",

            title: "Prestige Cushion",
            other: "迪奥上线",
            serverdata: {
              testLink: "http://dior.herdsric.com/dior-flower-rose/index.do",
              testServer: "47.100.119.73",
              testServerPath:
                "user/herdsric/tomcate-8010/webapps/hugoboss_father",
              officalLink:
                "http://diorpst.herdsric.com/dior-flower-rose/index.do",
              officalServer: "47.100.4.192",
              officalServerPath:
                "user/herdsric/tomcate-8010/webapps/hugoboss_father",
              statistics: "迪奥游戏",
              cdnurl: "http://alicdn.herdsric.com/dior/dior-icon-sampling"
            }
          }
        ]
      }
    };
  }
};
</script>

