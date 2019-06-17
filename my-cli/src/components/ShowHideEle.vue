<template>
  <div>
    <input type="checkbox" @change="checkChange" :checked="showeledata.show">
    {{showeledata.name}}
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
      console.log(e.target.checked);
      this.$emit("switchChecked", {
        name: this.showeledata.name,
        value: e.target.checked
      });
    }
  }
};
</script>

