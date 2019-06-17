<template>
  <div class="project">
    <div @click="switchMode">模式{{dataCanSet?"编辑模式":"预览模式"}}</div>
    <div class="hide-block">
      <input type="checkbox" @change="hideAll">全部隐藏
      <input type="checkbox" @change="hideSome">局部隐藏
      <input type="checkbox" @change="hideNone">不隐藏
    </div>
    <div class="hide-block">
      <show-hide-ele
        @switchChecked="showAndHide"
        v-bind:key="item.id"
        v-for="item in showAndHIdeList"
        :showeledata="item"
      ></show-hide-ele>
    </div>
    <div class="project-title">项目列表</div>
    <company-list :datalist="filedata.list" v-bind:settingparameter="settingParameter"></company-list>
    <list-item
      v-for="item in filedata.list"
      v-bind:key="item.id"
      v-bind:settingparameter="settingParameter"
      v-bind:itemdata="item"
    ></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem";
import CompanyList from "../components/CompanyList";

import ShowHideEle from "../components/ShowHideEle";
export default {
  name: "ProjectList",
  components: {
    "list-item": ListItem,
    "show-hide-ele": ShowHideEle,
    "company-list": CompanyList
  },
  created: function() {
    this.renderShowList();
  },
  methods: {
    switchMode() {
      if (this.dataCanSet) {
        console.log("setting");
      } else {
        console.log("watching");
      }
      this.dataCanSet = !this.dataCanSet;
      this.renderList();
    },
    renderList() {
      this.settingParameter.showSetting = this.dataCanSet;
    },
    showAndHide(data) {
      console.log(data);
      this.showAndHIdeList.forEach(function(item) {
        if (data.name == item.name) {
          item.show = data.value;
        }
      });

      this.renderShowList();
    },
    renderShowList: function() {
      var arr = [];
      this.showAndHIdeList.forEach(function(item) {
        if (item.show) {
          arr.push(item.name);
        }
      });
      this.settingParameter.showList = arr;
    },
    hideAll: function() {
      var allowArr = ["title"];
      this.hideAnyPart(allowArr);
    },
    hideSome: function() {
      var allowArr = ["title", "officalLink"];
      this.hideAnyPart(allowArr);
    },
    hideNone: function() {
      var allowArr = ["all"];
      this.hideAnyPart(allowArr);
    },
    hideAnyPart: function(allowArr) {
      if (allowArr[0] == "all") {
        this.showAndHIdeList.forEach(function(item) {
          item.show = true;
        });
      } else {
        this.showAndHIdeList.forEach(function(item) {
          var inList = false;
          allowArr.forEach(function(allowName) {
            if (item.name == allowName) {
              inList = true;
            }
          });
          if (inList) {
            item.show = true;
          } else {
            item.show = false;
          }
        });
      }

      this.renderShowList();
    }
  },
  data: function() {
    return {
      dataCanSet: false,
      settingParameter: {
        showSetting: false,
        showList: []
      },
      showAndHIdeList: [
        { id: 0, name: "title", show: true },
        { id: 1, name: "createDate", show: true },
        { id: 2, name: "cdnurl", show: true },
        { id: 3, name: "other", show: true },
        { id: 4, name: "statistics", show: true },
        { id: 5, name: "testLink", show: true },
        { id: 6, name: "testServer", show: true },
        { id: 7, name: "testServerPath", show: true },
        { id: 8, name: "officalLink", show: true },
        { id: 9, name: "officalServer", show: true },
        { id: 10, name: "officalServerPath", show: true }
      ],
      filedata: {
        title: "update",
        list: [
          {
            id: 0,
            company: "dior",
            style:
              "background:#dcbfbf;font-size:15px;height:50px;padding-left:5%;",
            createDate: "2018-08-01",

            title: "Prestige Cushion",
            other: "迪奥上线",
            cdnurl: "http://alicdn.herdsric.com/dior/dior-icon-sampling",
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
              statistics: "迪奥游戏"
            }
          },
          {
            company: "dior",
            id: 1,
            style:
              "background:#dcbfbf;font-size:15px;height:50px;padding-left:5%;",
            createDate: "2018-08-01",

            title: "Prestige Cushion",
            other: "迪奥上线",
            cdnurl: "http://alicdn.herdsric.com/dior/dior-icon-sampling",
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
              statistics: "迪奥游戏"
            }
          },
          {
            company: "hugoboss",
            id: 2,
            style:
              "background:#dcbfbf;font-size:15px;height:50px;padding-left:5%;",
            createDate: "2018-08-01",

            title: "Prestige Cushion",
            other: "迪奥上线",
            cdnurl: "http://alicdn.herdsric.com/dior/dior-icon-sampling",
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
              statistics: "迪奥游戏"
            }
          }
        ]
      }
    };
  }
};
</script>

