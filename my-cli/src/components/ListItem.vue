<template>
  <div class="flex-item">
    <!-- <transition-group name="fade" mode="in-out"> -->
    <list-item-block
      v-for="item in renderEle"
      v-bind:key="item.name"
      class="item-block"
      v-bind:itemdata="item"
      v-bind:settingparameter="settingparameter"
      v-bind:style="itemStyle"
      v-bind:showlist="showList"
      v-bind:id="id"
      @click.native="showContent(item)"
      @deleteTips="deleteTips"
    ></list-item-block>
    <!-- </transition-group> -->
  </div>
</template>

<script>
import ListItemBlock from "@/components/ListItemBlock";
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
  created: function() {
    var that = this;
    this.$bus.on("changevalue", function(data) {
      that.itemdata[data.name] = data.value;
      console.log(that.itemdata);
    });
  },
  props: ["itemdata", "settingparameter", "id"],
  components: {
    "list-item-block": ListItemBlock
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
          value: this.itemdata.serverdata.statistics,
          size: 1,
          showEle: true
        },
        {
          name: "officalLink",
          value: this.itemdata.serverdata.officalLink,
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
          value: this.itemdata.serverdata.officalServer,
          size: 2,
          showEle: true
        },
        {
          name: "officalServerPath",
          value: this.itemdata.serverdata.officalServerPath,
          size: 2,
          showEle: true
        },
        {
          name: "testLink",
          value: this.itemdata.serverdata.testLink,
          size: 2,
          showEle: true
        },
        {
          name: "testServer",
          value: this.itemdata.serverdata.testServer,
          size: 2,
          showEle: true
        },
        {
          name: "testServerPath",
          value: this.itemdata.serverdata.testServerPath,
          size: 2,
          showEle: true
        }
      ];
      var that = this;
      // basearr.forEach(function(item) {
      //   var isInLocalList = that.checkEleInArr(item.name, that.showList);
      //   var isInHostLIst = that.checkEleInArr(
      //     item.name,
      //     that.settingparameter.showList
      //   );
      //   item.showEle = isInHostLIst && isInLocalList;
      // });

      return basearr;
    }
  },
  methods: {
    changevalue: function(data) {
      // this.listData.item[data.name] = data.data;
      this.itemdata[data.name] = data.value;
    },
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
      console.log("showContent");
      console.log(newArr);
      this.$bus.emit("changeShowListById", newArr, this.id);
      // this.showList = newArr;
      // item.showEle = !item.showEle;
    },
    checkEleInArr: function(item, arr) {
      var isInArr = false;
      arr.forEach(function(items) {
        if (item == items) {
          isInArr = true;
        }
      });
      return isInArr;
    },
    deleteTips: function() {
      this.$emit("deleteTips", {
        id: this.itemdata.id
      });
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


