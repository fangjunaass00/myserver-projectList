<template>
  <!-- <div class="item-block"> -->
  <transition name="fade" mode="in-out">
    <div v-show="inshowList" :class="itemdata.size==2?'item-block':'item-block-half'">
      <div
        class="slide-part"
        v-bind:class="{'div-block-animate':settingparameter.dataCanSet,'div-title':itemdata.name=='title'}"
      >
        <div :class="itemdata.size==2?'div-block-name':'div-block-name-half'">
          {{getName}}
          <div class="delete" @click="deleteTips" v-if="itemdata.name=='title'">删除</div>
        </div>
        <div class="input-block">
          <span class="input-name">{{getNameInput}}</span>
          <input
            type="text"
            class="input-block-input"
            :value="itemdata.value"
            v-on:change="changeEvent"
          >
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ListItemBlock",
  data: function() {
    return {
      showList: this.settingparameter.showList
    };
  },
  created: function() {
    this.$bus.on("change show list", this.changeShow);
    this.$bus.on("project show", this.changeShowById);
  },
  methods: {
    changeEvent(e) {
      console.log({
        name: this.itemdata.name,
        value: e.target.value
      });
      this.$bus.emit("change project item", {
        name: this.itemdata.name,
        value: e.target.value,
        id: this.id
      });
    },
    deleteTips: function() {
      this.$bus.emit("deleteTips", { id: this.id });
    },
    changeShow: function(item) {
      console.log(item);
      this.showList = item;
    },
    changeShowById: function(item, id) {
      if (this.id == id) {
        this.showList = item;
      }
    }
  },

  watch: {
    showlist: function() {
      this.showList = this.settingparameter.showlist;
    }
  },
  computed: {
    getName: function() {
      return (
        this.$util.getParameterName(this.itemdata.name) +
        "：" +
        this.itemdata.value
      );
    },
    getNameInput: function() {
      return this.$util.getParameterName(this.itemdata.name) + "：";
    },
    inshowList: function() {
      var isInArr = false;
      var arr = this.showList;
      var name = this.itemdata.name;
      arr.forEach(function(items) {
        if (name == items) {
          isInArr = true;
        }
      });
      return isInArr;
    }
  },
  filters: {
    namefilter: function(str) {}
  },
  props: ["itemdata", "settingparameter", "showlist", "id"]
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
  box-shadow: 0 0 5px 3px rgba(255, 255, 255, 0.4) inset;
}
.div-block-name {
  width: 95%;
  padding-left: 5%;
  height: 50%;
  overflow: hidden;
}
.div-block-name-half {
  width: 90%;
  padding-left: 10%;
  height: 50%;
  overflow-x: auto;
  white-space: nowrap;
}

.input-block {
  width: 100%;
  height: 50%;
  display: flex;
}

.div-block-animate {
  transform: translateY(-50%);
}
.input-name {
  flex-shrink: 0;
  width: 25%;
}
.input-block-input {
  width: 100%;
  background: transparent;
  text-align: center;
  color: #423939;
}

.div-title {
  background: yellow;
  color: #000;
  cursor: pointer;
}

.delete {
  position: absolute;
  right: 0;
  top: 0;
}
</style>


