<template>
  <div class="flex-item">
    <list-item-block
      v-for="item in renderList"
      v-bind:key="item.name"
      class="item-block"
      v-bind:itemdata="item"
      v-bind:itemname="item.name"
      v-bind:settingparameter="setting"
      v-bind:style="listData.style"
      @changevalue="changevalue"
    ></list-item-block>
  </div>
</template>

<script>
import ListItemBlock from "@/components/ListItemBlock";
export default {
  data: function() {
    return {
      listData: null,
      setting: this.settingparameter
    };
  },
  created: function() {
    var getData = {
      company: "dior",
      style:
        "background:#dcbfbf;font-size:15px;height:50px;padding-left:5%;line-height: 50px;",
      renderEle: [
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
      ]
    };

    console.log(getData.renderEle);
    this.listData = getData;
  },
  name: "ListItem",
  props: ["itemdata", "settingparameter"],
  components: {
    "list-item-block": ListItemBlock
  },
  computed: {
    renderList: function(arr) {
      var that = this;
      return this.listData.renderEle.filter(function(item) {
        var inlist = false;
        console.log(that.settingparameter.showList);
        that.settingparameter.showList.forEach(function(name) {
          if (item.name == name) {
            inlist = true;
          }
        });
        return inlist;
      });
    }
  },
  methods: {
    changevalue: function(data) {
      console.log(data);
      // this.listData.item[data.name] = data.data;
      this.listData.renderEle.forEach(element => {
        if (element.name == data.name) {
          element.value = data.value;
        }
      });
      console.log(this.item);
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


