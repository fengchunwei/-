<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-header">
        <div style="float:left">{{this.title}}</div>
        <div style="float:right; font-size:12px;">
          <!-- <router-link to="/BillList">更多</router-link> -->
          <router-link :to="{name:'toDayList',params:{type:this.type,title:this.title}}">更多</router-link>
        </div>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="1">新歌榜</mt-tab-item>
            <mt-tab-item id="2">热歌榜</mt-tab-item>
            <mt-tab-item id="3">King榜</mt-tab-item>
          </mt-navbar>

          <!-- tabcontainer -->
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <TabList type="23" size="3"></TabList>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <TabList type="24" size="3"></TabList>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <TabList type="25" size="3"></TabList>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </div>
      <div class="mui-card-footer">
        <div style="margin:auto">查看该榜单></div>
      </div>
    </div>
  </div>
</template>
<script>
import TabList from "./TabListChild.vue";
export default {
  components: {
    TabList
  },
  data() {
    return {
      selected: "1",
    };
  },
  props:{
    title:String,
    type:String
  },
  methods: {}
};
</script>
<style scoped>
</style>