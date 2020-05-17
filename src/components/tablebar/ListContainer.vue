<template>
  <div>
    <div v-for="item in typeList" :key="item.id">
      <SongList :type="item"></SongList>
    </div>
  </div>
</template>
<script>
import SongList from "../ListContainer/SongList.vue";
export default {
  components: {
    SongList
  },
  data() {
    return {
      typeList: ["1", "2", "11", "21", "22", "23", "24", "25"]
    };
  },
  created() {
    document.title = this.$route.meta.Listtitle;
  },
  methods: {}
};
</script>
<style scoped>
</style>