<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录">
      <van-icon slot="left" name="cross" @click="$router.back()"></van-icon>
    </van-nav-bar>
    <!-- /导航栏 -->

    <!-- 登录表单 -->
    <van-form ref="loginForm" @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="rouler.mobile"
        maxlength="11"
        type="number"
      >
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        :rules="rouler.yz"
        maxlength="6"
        type="number"
      >
        <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
        <template #button>
          <van-count-down
            class="sortTime"
            :time="1000 * 60"
            format="ss s"
            v-if="isShow"
            @finish="isShow = false"
          ></van-count-down>
          <van-button
            v-else
            class="send-sms-btn"
            round
            size="small"
            type="default"
            native-type="button"
            @click="sends"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <!-- /登录表单 -->
  </div>
</template>

<script>
import { login, sendSms } from "@/api/user";
export default {
  name: "LoginIndex",
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: "", // 手机号
        code: "246810", // 验证码
      },
      rouler: {
        mobile: [
          { required: true, message: "请填写手机号" },
          { pattern: /1[3|7|5|8|6]\d{9}/, message: "手机号格式错误" },
        ],
        yz: [
          { required: true, message: "请填写验证码" },
          { pattern: /\d{6}/, message: "验证码格式错误" },
        ],
      },
      isShow: false,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onSubmit() {
      // 1. 获取表单数据
      // const user = this.user;

      // TODO: 2. 表单验证
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });
      // 3. 提交表单请求登录
      try {
       const {data} =  await login(this.user);
        // console.log("登录成功", res);
        //存储用户token
        this.$store.commit("upData",data.data)
        //轻提示
        this.$toast.success("登录成功");
        this.$router.back()
      } catch (err) {
        if (err.response.status === 400) {
          // console.log("手机号或验证码错误");
          this.$toast.fail("手机号或验证码错误");
        } else {
          // console.log("登录失败，请稍后重试");
          this.$toast.fail("登录失败，请稍后重试");
        }
      }

      // 4. 根据请求响应结果处理后续操作
    },
    async sends() {
      try {
        //验证手机号格式
        await this.$refs.loginForm.validate("mobile");
        // console.log("验证成功");
      } catch (err) {
        return console.log("验证失败", err);
      }
      //验证通过验证码运行
      this.isShow = true;
      //发送验证码请求
      try {
        //调用接口发送短信 传递用户手机号
        await sendSms(this.user.mobile);
        // console.log("发送成功",res);
        this.$toast("发送成功");
      } catch (err) {
        //发送失败关闭倒计时
        //if判断60秒内发送次数
        this.isShow = false;
        if(err.response.status ===429){
          this.$toast("发送太频繁啦,请稍后再试")
        }
        this.$toast("发送失败,请稍后重试");
      }
    },
  },
};
</script>

<style scoped lang="less">
.login-container {
  .iconfont {
    font-size: 25px;
  }

  .send-sms-btn {
    width: 200px;
    height: 45px;
    line-height: 45px;
    background-color: #ededed;
    font-size:24px;
    color: #666;
  }

  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
// .sortTime {
//   width: 60px;
//   height: 35px;
//   line-height: 35px;
//   text-align: center;
//   // padding-left: 25px;
//   color: hsl(0, 1%, 43%);
//   font-size: 16px;
// }
</style>
