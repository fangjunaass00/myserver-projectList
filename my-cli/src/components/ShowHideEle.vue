<template>
  <div
    class="check-item"
    @click="checkChange"
    v-bind:class="{'check-item-active':showeledata.show}"
  >{{showeledata.name|namefilter}}</div>
</template>

<script>
export default {
  name: "ShowHideEle",
  data: function() {
    return {};
  },
  props: ["showeledata"],
  methods: {
    checkChange: function(e) {
      console.log(e.target, this.showeledata);
      this.$emit("switchChecked", {
        name: this.showeledata.name,
        value: !this.showeledata.show
      });
    }
  },
  filters: {
    namefilter: function(itemname) {
      var blockName;
      switch (itemname) {
        case "title":
          blockName = "项目名称";
          break;
        case "createDate":
          blockName = "上线日期";
          break;
        case "cdnurl":
          blockName = "cdn地址";
          break;
        case "other":
          blockName = "其他信息";
          break;
        case "statistics":
          blockName = "百度统计";
          break;
        case "testLink":
          blockName = "测试链接";
          break;
        case "testServer":
          blockName = "测试服务器ip";
          break;
        case "testServerPath":
          blockName = "测试文件存放地址";
          break;
        case "officalLink":
          blockName = "正式链接";
          break;
        case "officalServer":
          blockName = "正式服务器ip";
          break;
        case "officalServerPath":
          blockName = "正式文件存放地址";
          break;
        case "svnurl":
          blockName = "svn地址";
          break;
      }
      return blockName;
    }
  }
};
</script>

<style>
.check-item {
  min-width: 100px;
  padding: 10px 20px;
  background: #e1e6eb;
  color: #2eb8cf;
  border-radius: 10px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  transform-origin: 50% 50%;
  cursor: pointer;
  font-weight: bold;
}

.check-item:hover {
  transform: scale(1.2);
}

.check-item-active {
  background: #2eb8cf;
  color: #e1e6eb;
}
</style>


