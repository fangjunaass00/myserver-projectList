<template>
  <div
    class="check-item"
    @click="checkChange"
    v-bind:class="{'check-item-active':showeledata.show}"
  >{{showEleDataName}}</div>
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
      console.log(e.target, this.showeledata);
      this.$emit("switchChecked", {
        name: this.showeledata.name,
        value: !this.showeledata.show
      });
    }
  },
  computed: {
    showEleDataName: function() {
      return this.$util.getParameterName(this.showeledata.name);
    }
  }
};
</script>

<style>
.check-item {
  min-width: 100px;
  padding: 10px 20px;
  background: #e1e6eb;
  color: #2eb8cf;
  border-radius: 10px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  transform-origin: 50% 50%;
  cursor: pointer;
  font-weight: bold;
}

.check-item:hover {
  transform: scale(1.2);
}

.check-item-active {
  background: #2eb8cf;
  color: #e1e6eb;
}
</style>


