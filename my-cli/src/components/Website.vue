<template>
  <div class="project">
    <transition name="fade2">
      <div class="mode-item" v-show="!settingParameter.dataCanSet" @click="switchMode">预览模式</div>
    </transition>
    <transition name="fade2">
      <div class="mode-item" v-show="settingParameter.dataCanSet" @click="switchMode">编辑模式</div>
    </transition>

    <div class="hide-block-btn">
      <div
        class="switch-showpart-btn"
        v-for="item in showAndHideBtn"
        v-bind:key="item.id"
        @click="changePartShowOrHide(item.id)"
        v-bind:class="{'btnActive':clickedPartId==item.id}"
      >{{item.name}}</div>
    </div>
    <div class="blank"></div>
    <div class="hide-block-check">
      <nav-part
        @switchChecked="changeTipsShow"
        v-bind:key="item.id"
        v-for="item in showAndHIdeList"
        :showeledata="item"
      ></nav-part>
    </div>
    <company-block
      ref="companyblock"
      :datalist="filedata.list"
      v-bind:settingparameter="settingParameter"
    ></company-block>
    <div class="btn-list">
      <div class="submit" v-show="settingParameter.dataCanSet" @click="addNewCompany">添加新公司项目</div>
      <div class="submit" v-show="settingParameter.dataCanSet" @click="getSubmitData">提交</div>
    </div>
    <company-new-block v-show="addNewPart"></company-new-block>
  </div>
</template>

<script>
import CompanyBlock from "../components/CompanyBlock";
import Nav from "../components/Nav";
import CompanyNewBlock from "../components/CompanyNewBlock";

var axios = require("axios");
export default {
  name: "Website",
  components: {
    "nav-part": Nav,
    "company-block": CompanyBlock,
    "company-new-block": CompanyNewBlock
  },
  created: function() {
    this.getJsonData();
    this.changePartShowOrHide(this.clickedPartId);
    this.$bus.on("close company", this.hideNewCompany);
    this.$bus.on("create new company", this.addNewCompanyData);
    this.$bus.on("add new projrct", this.addNewProject);
    this.$bus.on("delete tips", this.deleteTips);
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

    changeTipsShow(data) {
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
      setTimeout(() => {
        this.$bus.emit("change show list", arr);
      }, 200);
    },
    changePartShowOrHide: function(id) {
      this.clickedPartId = id;
      var allowArr;
      if (id == 0) {
        allowArr = ["all"];
      } else if (id == 1) {
        allowArr = ["title", "officalLink"];
      } else if (id == 2) {
        allowArr = ["title"];
      }

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
    },
    getJsonData: function() {
      console.log(this.filedata);
      this.$axios({
        url: "/getjson",
        method: "GET",
        params: {}
      })
        .then(res => {
          console.log(res);
          var postdata = res.data.data;
          var jsonData = JSON.parse(postdata);
          console.log(jsonData);
          this.filedata = jsonData;
        })
        .catch(err => {
          console.log(err);
        });
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
    addNewProject: function(data) {
      console.log(data);
      var newobj = {
        id: Date.now() - 1,
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
      this.renderShowList();
    },
    addNewCompanyData: function(data) {
      console.log(data);
      var newobj = {
        id: Date.now() - 1,
        company: data.companyname,
        createDate: data.createDate,

        title: data.title,
        other: data.other,
        svnurl: data.svnurl,
        cdnurl: data.cdnurl,
        serverdata: {
          testLink: data.testLink,
          testServer: data.testServer,
          testServerPath: data.testServerPath,
          officalLink: data.officalLink,
          officalServer: data.officalServer,
          officalServerPath: data.officalServerPath,
          statistics: data.statistics
        }
      };
      this.filedata.list.push(newobj);
      this.addNewPart = false;
    },
    deleteTips: function(data) {
      var id = data.id;
      var index = 0;
      var that = this;
      this.filedata.list.map(function(item) {
        if (item.id == id) {
          that.filedata.list.splice(index, 1);
        } else {
          index++;
        }
      });
    },
    addNewCompany: function() {
      this.addNewPart = true;
    },
    hideNewCompany: function() {
      this.addNewPart = false;
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
      clickedPartId: 1,
      addNewPart: false,

      filedata: {
        title: "update",
        list: []
      }
    };
  }
};
</script>

<style>
.mode-item {
  width: 200px;
  height: 50px;
  position: absolute;
  left: 0;
  top: 20px;
  background: #2eb8cf;
  color: #fff;
  border-radius: 0 10px 10px 0;
  text-align: center;
  line-height: 50px;
  transition: 0.5s;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.5);
}
.hide-block-btn {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 15px;
  justify-content: center;
}
.switch-showpart-btn {
  width: 100px;
  height: 50px;
  background: #e1e6eb;
  color: #2eb8cf;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}

.switch-showpart-btn:hover {
  width: 120px;
}

.switch-showpart-btn:nth-child(1) {
  border-radius: 10px 0 0 10px;
}
.switch-showpart-btn:nth-child(3) {
  border-radius: 0 10px 10px 0;
}
.btnActive {
  background: #2eb8cf;
  color: #e1e6eb;
}
.hide-block-check {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.btn-list {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
}
.submit {
  min-width: 100px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  line-height: 50px;
  background: #2eb8cf;
  border-radius: 10px;
  color: #fff;
  margin: 30px;
  padding: 0 10px;
}

.blank {
  width: 100%;
  height: 20px;
}

/* 以下是过渡class，并不是keyframe */
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  height: auto;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  height: 0;
} */

.fade-enter-active {
  animation: fade-in 0.5s;
}

.fade-leave-active {
  animation: fade-in 0.5s reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}

.fade2-enter-active {
  animation: fade2-in 0.5s;
}

.fade2-leave-active {
  animation: fade2-in 0.5s reverse;
}

@keyframes fade2-in {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
</style>


