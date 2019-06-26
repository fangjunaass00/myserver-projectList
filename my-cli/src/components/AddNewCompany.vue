<template>
  <div>
    <div class="new-company-part"></div>
    <div class="new-part">
      <div class="new-part-fix">
        <div class="new-part-fix-name">公司名称</div>
        <input class="new-part-fix-input" v-model="tipsData.companyname" type="text">
      </div>
      <div class="new-part-fix">
        <div class="new-part-fix-name">项目名称</div>
        <input class="new-part-fix-input" v-model="tipsData.title" type="text">
      </div>
      <div class="new-part-fix">
        <div class="new-part-fix-name">上线日期</div>
        <input class="new-part-fix-input" v-model="tipsData.createDate" type="text">
      </div>
      <div class="new-part-fix">
        <div class="new-part-fix-name">cdn地址</div>
        <input class="new-part-fix-input" v-model="tipsData.cdnurl" type="text">
      </div>
      <div class="new-part-fix">
        <div class="new-part-fix-name">其他信息</div>
        <input class="new-part-fix-input" v-model="tipsData.other" type="text">
      </div>
      <div class="new-part-fix">
        <div class="new-part-fix-name">百度统计</div>
        <input class="new-part-fix-input" v-model="tipsData.statistics" type="text">
      </div>
      <div class="new-part-fix">
        <div class="new-part-fix-name">测试链接</div>
        <input class="new-part-fix-input" v-model="tipsData.testLink" type="text">
      </div>
      <div class="new-part-fix">
        <div class="new-part-fix-name">测试服务器ip</div>
        <input class="new-part-fix-input" v-model="tipsData.testServer" type="text">
      </div>
      <div class="new-part-fix">
        <div class="new-part-fix-name">测试文件存放地址</div>
        <input class="new-part-fix-input" v-model="tipsData.testServerPath" type="text">
      </div>
      <div class="new-part-fix">
        <div class="new-part-fix-name">正式链接</div>
        <input class="new-part-fix-input" v-model="tipsData.officalLink" type="text">
      </div>
      <div class="new-part-fix">
        <div class="new-part-fix-name">正式服务器ip</div>
        <input class="new-part-fix-input" v-model="tipsData.officalServer" type="text">
      </div>
      <div class="new-part-fix">
        <div class="new-part-fix-name">正式文件存放地址</div>
        <input class="new-part-fix-input" v-model="tipsData.officalServerPath" type="text">
      </div>
      <div class="new-part-fix">
        <div class="new-part-fix-name">svn地址</div>
        <input class="new-part-fix-input" v-model="tipsData.svnurl" type="text">
      </div>
      <div class="btn-list">
        <div class="submit" @click="submitData">提交</div>
        <div class="submit" @click="cancelData">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewCompany",
  data: function() {
    return {
      tipsData: {
        companyname: "公司名称",
        title: "",
        createDate: "",
        cdnurl: "",
        other: "",
        statistics: "",
        testLink: "",
        testServer: "",
        testServerPath: "",
        officalLink: "",
        officalServer: "",
        officalServerPath: "",
        svnurl: ""
      }
    };
  },
  methods: {
    submitData: function() {
      if (!this.tipsData.companyname) {
        alert("请填写公司名称");
      }
      console.log(this.tipsData);
      this.$bus.emit("add new company data", this.tipsData);
    },
    cancelData: function() {
      this.$bus.emit("close newpart");
    }
  }
};
</script>
<style>
.new-company-part {
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background: #000;
  position: absolute;
  top: 0;
  z-index: 10;
}
.new-part {
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10;
}
.new-part-fix {
  display: flex;
  height: 50px;
  background: #fff;
  line-height: 50px;
}
.new-part-fix-name {
  min-width: 20%;
  padding-left: 5%;
}
.new-part-fix-input {
  width: 80%;
  padding-right: 5%;
}
</style>



