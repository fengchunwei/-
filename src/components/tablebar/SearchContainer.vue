<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="搜索"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div>
      <ul>
        <li v-for="item in resultList" :key="item.id">
          <router-link :to="'/PlayMusic/'+item.songid">
            <span style="font-size:14px">{{item.songname}}</span>
            <span style="font-size:12px;width=100px;">{{item.artistname}}</span>
          </router-link>
        </li>
      </ul>

      <div>
        <p>搜索记录</p>
        <span
          v-for="item in historyList"
          :key="item.id"
          style="display: inline-block;"
        >{{item.person}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
      resultList: [],
      historyList: []
    };
  },
  created() {
    this.onSearch();
    localStorage.clear();
    document.title = this.$route.meta.searchtitle;
  },
  methods: {
    onSearch(val) {
      const searchListUrl =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=" +
        this.value;
      this.$axios
        .get(searchListUrl)
        .then(result => {
          // console.log(result);
          this.resultList = result.data.song;
        })
        .catch();
      //将历史记录存到localStorage里
      // localStorage.getItem(this.value)
      var con = { id: Date.now(), person: this.value };
      var list = JSON.parse(localStorage.getItem("history") || "[]");
      list.push(con);
      localStorage.setItem("history", JSON.stringify(list));
      this.historyList = list;
      console.log(this.historyList);
    },
    onCancel() {
      Toast("取消");
    }
  }
};
</script>
<style scoped>
.a {
  display: inline-block;
}
</style>