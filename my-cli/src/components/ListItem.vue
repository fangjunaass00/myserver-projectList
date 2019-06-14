<template>
  <div>
    <div class="item-name" v-bind:style="itemdata.style">项目名：{{itemdata.title}}</div>
    <div class="hide-message">
      <div class="item-create-date" v-bind:style="itemdata.style">上线日期：{{itemdata.createDate}}</div>
      <div
        class="item-serverdata-cdnurl"
        v-bind:style="itemdata.style"
      >cdn地址：{{itemdata.serverdata.cdnurl}}</div>
      <div class="item-other" v-bind:style="itemdata.style">其他信息：{{itemdata.other}}</div>
      <div
        class="item-serverdata-statistics"
        v-bind:style="itemdata.style"
      >百度统计：{{itemdata.serverdata.statistics}}</div>
    </div>
    <div class="server-part-offical">
      <div
        class="item-serverdata-officalLink"
        v-bind:style="itemdata.style"
      >正式链接： {{itemdata.serverdata.officalLink}}</div>
      <div
        class="item-serverdata-officalServer"
        v-bind:style="itemdata.style"
      >正式服务器ip：{{itemdata.serverdata.officalServer}}</div>
      <div
        class="item-serverdata-officalServerPath"
        v-bind:style="itemdata.style"
      >正式文件存放路径：{{itemdata.serverdata.officalServerPath}}</div>
    </div>
    <div class="server-part-test">
      <div
        class="item-serverdata-testlink"
        v-bind:style="itemdata.style"
      >测试链接：{{itemdata.serverdata.testLink}}</div>
      <div
        class="item-serverdata-testServer"
        v-bind:style="itemdata.style"
      >测试服务器ip：{{itemdata.serverdata.testServer}}</div>
      <div
        class="item-serverdata-testServerPath"
        v-bind:style="itemdata.style"
      >测试文件存放路径{{itemdata.serverdata.testServerPath}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: ["itemdata"]
};
</script>

<style>
* {
  text-align: left;
  margin: 0;
  padding: 0;
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
.hide-message div {
  width: 45%;
  height: 50px;
  padding-left: 5%;
}
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


