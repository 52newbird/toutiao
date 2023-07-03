<!--  -->
<template>
  <div>
    <router-view />
    <van-tabbar  route>
      <van-tabbar-item to="/">
        <i slot="icon" class="iconfont icon-shouye"></i>
        <span  class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <i slot="icon" class="iconfont icon-wenda"></i>
        <span  class="text">问答</span>
      </van-tabbar-item>
       <van-tabbar-item to="/video">
        <i slot="icon" class="iconfont icon-shipin"></i>
        <span  class="text">视频</span>
      </van-tabbar-item>
       <van-tabbar-item to="/my">
        <i slot="icon" class="iconfont icon-wode"></i>
        <span  class="text">{{$store.state.user?`我的`:`未登录`}}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='less' scoped>
i.iconfont{
    font-size: 40px;
}
span.text{
  font-size: 20px;
}
</style>