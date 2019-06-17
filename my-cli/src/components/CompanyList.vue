<template>
  <div>
    <div v-for="(item) in projectList" v-bind:key="item.index">
      <div class="company-name" @click="showAndHideContent(item.index)">公司名称：{{item.name}}</div>
      <list-item
        v-show="showContentIndex==item.index"
        v-for="items in item.value"
        v-bind:key="items.id"
        v-bind:settingparameter="setting"
        v-bind:itemdata="items"
      ></list-item>
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
export default {
  name: "CompanyList",
  props: ["settingparameter", "datalist"],
  components: {
    "list-item": ListItem
  },
  data: function() {
    return {
      projectList: null,
      setting: this.settingparameter,
      showContentIndex: 1
    };
  },
  methods: {
    getList: function() {
      var company = {};
      var newarr = [];

      this.datalist.forEach(element => {
        if (!company[element.company]) {
          company[element.company] = [element];
        } else {
          company[element.company].push(element);
        }
      });
      var index = 1;
      for (var items in company) {
        var obj = {
          name: items,
          value: company[items],
          index: index
        };
        index++;
        newarr.push(obj);
      }
      this.projectList = newarr;
    },
    showAndHideContent: function(index) {
      this.showContentIndex = index;
    }
  },
  created: function() {
    this.getList();
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
}
</style>


