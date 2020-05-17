<template>
  <div>
    <van-pull-refresh v-model="refreshing" >
      <van-list
        v-model="loading"
        :finished="finished"
        :offset="offset"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <h4 style="margin:10px">{{this.$route.params.title}}</h4>
        <router-link
          :to="'/PlayMusic/'+item.song_id"
          class="musicBox"
          v-for="item in picList"
          :key="item.id"
        >
          <img :src="item.pic_big" alt />
          <p>{{item.title}}</p>
        </router-link>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { getMusicBillList } from "../../../api/musicList.js";
export default {
  data() {
    return {
      picList: [],
      loading: false,
      finished: false,
      refreshing: false,
      offset: 0
    };
  },
  created() {},
  methods: {
    onLoad() {
      // console.log(this.$route.params.type);
      // console.log(this.$route.params.title);
      setTimeout(() => {
        getMusicBillList(this.$route.params.type,10,this.offset)
          .then(res => {
            console.log(res);
            this.picList = this.picList.concat(res.song_list);
            this.loading = false;
            this.offset += 10;
            // debugger
          })
          .catch();
      },500);

      //   setTimeout(() => {
      //     if (this.refreshing) {
      //       this.picList = [];
      //       this.refreshing = false;
      //     }

      //     for (let i = 0; i < 10; i++) {
      //       this.picList.push(this.picList.length + 1);
      //     }
      //     this.loading = false;

      //     if (this.picList.length >= 40) {
      //       this.finished = true;
      //     }
      //   }, 1000);
      // },
      // onRefresh() {
      //   // 清空列表数据
      //   this.finished = false;

      //   // 重新加载数据
      //   // 将 loading 设置为 true，表示处于加载状态
      //   this.loading = true;
      //   this.onLoad();
    }
  }
};

// created() {
// console.log(this.$route.params.title);
// console.log(this.$route.params.type);

// // this.$$router.push("/HomeContainer")
// // this.$router.back()
// // debugger
//   document.title = this.$route.meta.sitetitle;
// },
// methods: {
// //路由返回
// back(){
//   // this.$router.back();
//   // this.$router.go(-2)
// },
// home(){
//   //push replace 返回首页
//   // this.$router.push("/HomeContainer")
//   // this.$router.replace("/HomeContainer")
// }

// onLoad() {
// 异步更新数据
// setTimeout 仅做示例，真实场景中一般为 ajax 请求
//       setTimeout(() => {
//         for (let i = 0; i < 10; i++) {
//           this.list.push(this.list.length + 1);
//         }

//         // 加载状态结束
//         this.loading = false;

//         // 数据全部加载完成
//         if (this.list.length >= 40) {
//           this.finished = true;
//         }
//       }, 1000);
//     }
//   }
// };
</script>
<style scoped>
.musicBox {
  width: 50%;
  float: left;
  text-align: center;
}
</style>
























