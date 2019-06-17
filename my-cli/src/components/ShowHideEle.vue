<template>
  <div class="check-item">
    <input type="checkbox" @change="checkChange" :checked="showeledata.show">
    {{showeledata.name|namefilter}}
  </div>
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
      this.$emit("switchChecked", {
        name: this.showeledata.name,
        value: e.target.checked
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
      }
      return blockName;
    }
  }
};
</script>

<style>
.check-item {
  min-width: 100px;
  padding: 0 20px;
}
</style>


