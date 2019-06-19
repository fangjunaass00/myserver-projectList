<template>
  <!-- <div class="item-block"> -->
  <div :class="itemdata.size==2?'item-block':'item-block-half'">
    <div
      class="slide-part"
      v-bind:class="{'div-block-animate':settingparameter.dataCanSet,'div-title':itemdata.name=='title'}"
    >
      <div :class="itemdata.size==2?'div-block-name':'div-block-name-half'">
        {{getName}}
        <div class="delete" @click="deleteTips" v-if="itemdata.name=='title'">删除</div>
      </div>
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
    return {};
  },
  methods: {
    changeEvent(e) {
      this.$emit("changevalue", {
        name: this.itemdata.name,
        value: e.target.value
      });
    },
    deleteTips: function() {
      this.$emit("deleteTips");
    }
  },
  computed: {
    getName: function() {
      return (
        this.$util.getParameterName(this.itemdata.name) +
        "：" +
        this.itemdata.value
      );
    }
  },
  filters: {
    namefilter: function(str) {}
  },
  props: ["itemdata", "settingparameter"]
};
</script>

<style>
.item-block {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.item-block-half {
  width: 50%;
  height: 100%;
  overflow: hidden;
}
.slide-part {
  width: 100%;
  height: 200%;
  transition: 0.5s;
}
.div-block-name {
  width: 95%;
  padding-left: 5%;
  height: 50%;
}
.div-block-name-half {
  width: 90%;
  padding-left: 10%;
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

.div-title {
  background: yellow;
  color: #000;
}

.delete {
  position: absolute;
  right: 0;
  top: 0;
}
</style>


