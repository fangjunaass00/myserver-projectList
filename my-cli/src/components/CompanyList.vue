<template>
  <div></div>
</template>

<script>
export default {
  name: "CompanyList",
  props: ["settingparameter", "datalist"],
  data: function() {
    return {
      projectList: null
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
      console.log(company);
      return this.datalist;
    }
  },
  created: function() {
    this.getList();
  }
};
</script>

