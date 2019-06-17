<template>
  <!-- <div class="item-block"> -->
  <div :class="itemdata.size==2?'item-block':'item-block-half'">
    <div class="slide-part" v-bind:class="{'div-block-animate':setting.showSetting}">
      <div class="div-block">{{getName}}</div>
      <div class="input-block">
        <input
          type="text"
          class="input-block-input"
          :value="itemdata.value"
          v-on:change="changeEvent"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItemBlock",
  data: function() {
    return {
      setting: this.settingparameter
    };
  },
  methods: {
    changeEvent(e) {
      console.log(e.target.value);
      this.$emit("changevalue", { name: this.itemname, value: e.target.value });
    }
  },
  computed: {
    getName: function() {
      var blockName = "";
      switch (this.itemname) {
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
      console.log(this.itemname);
      return blockName + "：" + this.itemdata.value;
    }
  },
  filters: {
    namefilter: function(str) {}
  },
  props: ["itemdata", "settingparameter", "itemname"]
};
</script>

<style>
.item-block {
  width: 950%;
  height: 100%;
  overflow: hidden;
}

.item-block-half {
  width: 45%;
  height: 100%;
  overflow: hidden;
}
.slide-part {
  width: 100%;
  height: 200%;
  transition: 0.5s;
}
.div-block {
  width: 100%;
  height: 50%;
}

.input-block {
  width: 100%;
  height: 50%;
}

.div-block-animate {
  transform: translateY(-50%);
}

.input-block-input {
  width: 95%;
  background: transparent;
}
</style>


