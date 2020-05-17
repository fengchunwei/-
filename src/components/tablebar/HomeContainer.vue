<template>
  <div>
    <!-- 今日榜单 -->
    <DayList title="今日榜单" type="1" size="6"></DayList>
    <!-- 新歌速递 -->
    <DayList title="新歌速递" type="2" size="3"></DayList>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../assets/1.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/2.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/3.jpg" alt />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 音乐榜单 -->
    <TabList title="音乐榜单" type="23"></TabList>
    <!-- 热门歌单 -->
    <DayList title="热门歌单" type="21" size="6"></DayList>
  </div>
</template>
<script>
import DayList from "../homeList/DayList.vue";
import TabList from "../homeList/TabList.vue";
export default {
  components: {
    DayList,
    TabList
  },
  name: "todayList",
  data() {
    return {};
  },
  created() {
    document.title = this.$route.meta.hometitle;
  },
  methods: {}
};
</script>
<style scoped>
.body {
  font-size: 14px;
}
.mui-card-header {
  font-size: 14px;
}
/* 轮播图 */
.mint-swipe {
  height: 200px;
  padding: 15px;
}
.mint-swipe-items-wrap img {
  width: 100%;
  height: 100%;
}
</style>

