<template>
  <div class="project">
    <div @click="switchMode">模式{{settingParameter.dataCanSet?"编辑模式":"预览模式"}}</div>
    <div class="hide-block-btn">
      <div
        class="switch-showpart-btn"
        v-for="item in showAndHideBtn"
        v-bind:key="item.id"
        @click="changePartShowOrHide(item)"
        v-bind:class="{'btnActive':clickedPartId==item.id}"
      >{{item.name}}</div>
    </div>
    <div class="hide-block-check">
      <show-hide-ele
        @switchChecked="showAndHide"
        v-bind:key="item.id"
        v-for="item in showAndHIdeList"
        :showeledata="item"
      ></show-hide-ele>
    </div>
    <company-list
      @addNewTipsMain="addnewTips"
      :datalist="filedata.list"
      v-bind:settingparameter="settingParameter"
      @deleteTips="deleteTips"
    ></company-list>
    <div class="submit" v-show="settingParameter.dataCanSet" @click="getSubmitData">提交</div>
  </div>
</template>

<script>
import CompanyBlock from "../components/CompanyBlock";
import ShowHideEle from "../components/ShowHideEle";
var axios = require("axios");
export default {
  name: "ProjectOuterUI",
  components: {
    "show-hide-ele": ShowHideEle,
    "company-list": CompanyBlock
  },
  created: function() {
    this.renderShowList();
  },
  methods: {
    switchMode() {
      if (this.settingParameter.dataCanSet) {
        console.log("setting");
      } else {
        console.log("watching");
      }
      this.settingParameter.dataCanSet = !this.settingParameter.dataCanSet;
    },

    showAndHide(data) {
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
    changePartShowOrHide: function(item) {
      this.clickedPartId = item.id;
      var allowArr;
      if (item.id == 0) {
        allowArr = ["all"];
      } else if (item.id == 1) {
        allowArr = ["title", "officalLink"];
      } else if (item.id == 2) {
        allowArr = ["title"];
      }

      this.hideAnyPart(allowArr);
    },
    hideAnyPart: function(allowArr) {
      console.log(allowArr);
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
    },
    getSubmitData: function() {
      console.log(this.filedata);
      this.$axios({
        url: "/setjson",
        method: "GET",
        params: {
          data: this.filedata
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addnewTips: function(data) {
      console.log(data);
      var newobj = {
        id: this.filedata.list.length,
        company: data.name,
        createDate: "",

        title: "",
        other: "",
        svnurl: "",
        cdnurl: "",
        serverdata: {
          testLink: "",
          testServer: "",
          testServerPath: "",
          officalLink: "",
          officalServer: "",
          officalServerPath: "",
          statistics: ""
        }
      };
      this.filedata.list.push(newobj);
    },
    deleteTips: function(data) {
      var id = data.id;
      var index = 0;
      var that = this;
      this.filedata.list.map(function(item) {
        if (item.id == id) {
          that.filedata.list.splice(index, 1);
          console.log(that.filedata.list);
        } else {
          index++;
        }
      });
      console.log(index);
    }
  },
  data: function() {
    return {
      settingParameter: {
        dataCanSet: false,
        showList: []
      },
      showAndHideBtn: [
        { id: 0, name: "全部显示" },
        { id: 1, name: "局部显示" },
        { id: 2, name: "全部隐藏" }
      ],
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
        { id: 10, name: "officalServerPath", show: true },
        { id: 11, name: "svnurl", show: true }
      ],
      clickedPartId: 0,

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
            svnurl: "www.baidu.com",
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
            svnurl: "www.baidu.com",
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
            svnurl: "www.baidu.com",
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

<style>
.hide-block-btn {
  width: 300px;
  display: flex;
  font-size: 15px;
}
.switch-showpart-btn {
  width: 100px;
  height: 50px;
  background: #2eb8cf;
  color: #e1e6eb;
  text-align: center;
  line-height: 50px;
}
.btnActive {
  background: #e1e6eb;
  color: #2eb8cf;
}
.hide-block-check {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.submit {
  width: 100px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  line-height: 50px;
  background: #2eb8cf;
  border-radius: 10px;
  color: #fff;
  margin: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* 以下是过渡class，并不是keyframe */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  height: auto;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  height: 0;
}
</style>


