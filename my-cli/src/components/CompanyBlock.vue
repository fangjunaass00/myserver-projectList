<template>
  <div>
    <company-block-item
      v-for="item in projectList"
      v-bind:key="item.index"
      v-bind:settingparameter="settingparameter"
      v-bind:itemdata="item"
      @addNewTips="addNewTips"
      @deleteTips="deleteTips"
    ></company-block-item>
  </div>
</template>

<script>
import CompanyBlockItem from "@/components/CompanyBlockItem";
export default {
  name: "CompanyBlock",
  props: ["settingparameter", "datalist"],
  components: {
    "company-block-item": CompanyBlockItem
  },
  data: function() {
    return {};
  },
  methods: {
    addNewTips: function(data) {
      this.$emit("addNewTipsMain", {
        name: data.name
      });
    },
    deleteTips: function(data) {
      this.$emit("deleteTips", {
        id: data.id
      });
    }
  },
  computed: {
    projectList: function() {
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
      return newarr;
    }
  }
};
</script>




