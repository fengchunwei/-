<template>
  <div id="app">
    <div class="header">
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item-wh" to="/HomeContainer">
          <span class="mui-tab-label" ><i class=" mui-icon-extra mui-icon-extra-custom" style="background:#64d6d0; color:#fff; border-radius: 50%;"></i></span>
        </router-link>
        <router-link class="mui-tab-item-wh" to="/SingerContainer">
          <span class="mui-tab-label">歌手</span>
        </router-link>
        <router-link class="mui-tab-item-wh" to="/ListContainer">
          <span class="mui-tab-label">榜单</span>
        </router-link>
        <router-link class="mui-tab-item-wh" to="/MyContainer">
          <span class="mui-tab-label">我的</span>
        </router-link>
        <router-link class="mui-tab-item-wh" to="/SearchContainer">
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
.header {
  font-size: 14px;
  padding-bottom: 50px;
}
.mui-active {
  color: #007aff;
}
.mui-tab-label{
  display: inline-block;
  width: 20%;
  margin-top: 15px;
}
.mui-bar-tab .mui-tab-item-wh {
  /* display: table-cell; */
  
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item-wh .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-wh .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mui-bar-tab {
  top: 0;
}
</style>
