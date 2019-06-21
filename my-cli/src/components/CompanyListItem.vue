<template>
  <div>
    <div class="company-name" @click="showOrHideList">
      公司名称：{{itemdata.name}}
      <div class="company-addbtn" @click.stop="addNewTips">添加</div>
    </div>
    <!-- {{itemdata}} -->
    <transition-group name="fade">
      <list-item
        v-show="showList"
        v-for="items in itemdata.value"
        v-bind:key="items.id"
        v-bind:settingparameter="settingparameter"
        v-bind:itemdata="items"
        @deleteTips="deleteTips"
      ></list-item>
    </transition-group>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
export default {
  name: "CompanyListItem",
  props: ["settingparameter", "itemdata"],
  components: {
    "list-item": ListItem
  },
  data: function() {
    return {
      showList: true
    };
  },
  methods: {
    showOrHideList: function() {
      this.showList = !this.showList;
    },
    addNewTips: function() {
      this.$emit("addNewTips", {
        name: this.itemdata.name
      });
    },
    deleteTips: function(data) {
      this.$emit("deleteTips", {
        id: data.id
      });
    }
  }
};
</script>

<style>
.company-name {
  width: 90%;
  height: 50px;
  background: #000;
  color: aliceblue;
  line-height: 50px;
  padding-left: 10%;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, 1) inset;
}
.company-addbtn {
  position: absolute;
  right: 5%;
  top: 0;
}
</style>