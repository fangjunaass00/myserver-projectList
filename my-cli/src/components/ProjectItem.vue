<template>
  <div class="flex-item">
    <!-- <transition-group name="fade" mode="in-out"> -->
    <project-item-block
      v-for="item in renderEle"
      v-bind:key="item.name"
      class="item-block"
      v-bind:itemdata="item"
      v-bind:settingparameter="settingparameter"
      v-bind:style="itemStyle"
      v-bind:showlist="showList"
      v-bind:id="id"
      @click.native="showContent(item)"
    ></project-item-block>
    <!-- </transition-group> -->
  </div>
</template>

<script>
import ProjectItemBlock from "@/components/ProjectItemBlock";
export default {
  data: function() {
    return {
      listData: null,
      showList: this.$util.originalShowList,
      listOpenning: true,
      itemStyle:
        "background:rgb(187, 236, 202);font-size:15px;height:40px;line-height: 40px;"
    };
  },

  name: "ListItem",
  created: function() {},
  props: ["itemdata", "settingparameter", "id"],
  components: {
    "project-item-block": ProjectItemBlock
  },
  computed: {
    renderEle: function() {
      var basearr = [
        { name: "title", value: this.itemdata.title, size: 2, showEle: true },
        {
          name: "createDate",
          value: this.itemdata.createDate,
          size: 1,
          showEle: true
        },
        { name: "cdnurl", value: this.itemdata.cdnurl, size: 1, showEle: true },
        { name: "other", value: this.itemdata.other, size: 1, showEle: true },
        {
          name: "statistics",
          value: this.itemdata.statistics,
          size: 1,
          showEle: true
        },
        {
          name: "officalLink",
          value: this.itemdata.officalLink,
          size: 2,
          showEle: true
        },
        {
          name: "svnurl",
          value: this.itemdata.svnurl,
          size: 2,
          showEle: true
        },
        {
          name: "officalServer",
          value: this.itemdata.officalServer,
          size: 2,
          showEle: true
        },
        {
          name: "officalServerPath",
          value: this.itemdata.officalServerPath,
          size: 2,
          showEle: true
        },
        {
          name: "testLink",
          value: this.itemdata.testLink,
          size: 2,
          showEle: true
        },
        {
          name: "testServer",
          value: this.itemdata.testServer,
          size: 2,
          showEle: true
        },
        {
          name: "testServerPath",
          value: this.itemdata.testServerPath,
          size: 2,
          showEle: true
        }
      ];
      var that = this;
      return basearr;
    }
  },
  methods: {
    showContent: function(item) {
      if (item.name != "title" || this.settingparameter.dataCanSet) {
        return;
      }

      var newArr;
      if (this.listOpenning) {
        newArr = ["title"];
      } else {
        newArr = this.$util.originalShowList;
      }
      this.listOpenning = !this.listOpenning;
      // 向子集传送事件
      this.$bus.emit("project show", newArr, this.id);
    },
    checkEleInArr: function(item, arr) {
      var isInArr = false;
      arr.forEach(function(items) {
        if (item == items) {
          isInArr = true;
        }
      });
      return isInArr;
    }
  }
};
</script>

<style>
* {
  text-align: left;
  margin: 0;
  padding: 0;
}
.flex-item {
  display: flex;
  /* flex-grow: 1; */
  flex-wrap: wrap;
  position: relative;
}
.item-name {
  width: 95%;
  height: 50px;
  background: #dcbfbf;
  color: black;
  text-align: left;
  line-height: 50px;
  padding-left: 5%;
}

.hide-message {
  display: flex;
  width: 100%;
  height: auto;
  /* justify-content: space-between; */
  background: #dcbfbf;
  color: black;
  flex-wrap: wrap;
  text-align: left;
}

.item-serverdata-cdnurl {
  width: 50%;
  height: 50px;
}

.item-serverdata-statistics {
  width: 50%;
  height: 50px;
}
/* .hide-message div {
  width: 45%;
  height: 50px;
  padding-left: 5%;
} */
.hide-message .item-create-date {
  width: 30%;
  height: 50px;
}
.hide-message .item-other {
  width: 30%;
  height: 50px;
}

.server-part-offical {
  width: 100%;
}

.item-serverdata-officalLink {
  width: 100%;
  height: 50px;
  background: #dcbfbf;
}
.item-serverdata-officalServer {
  width: 100%;
  height: 50px;
  background: #dcbfbf;
}
.item-serverdata-officalServerPath {
  width: 100%;
  height: 50px;
  background: #dcbfbf;
}
</style>


