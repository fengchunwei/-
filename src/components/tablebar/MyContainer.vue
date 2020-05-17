<template>
  <div>
      这是我的界面
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    document.title = this.$route.meta.mytitle
  },
};
</script>
<style scoped>
</style>