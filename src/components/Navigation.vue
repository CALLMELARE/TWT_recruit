<template>
<div style="align:center">
  <div class="nav-bar">
    <div class="bar-container">
      <span class="logo-box">
        <img :src="logoIcon" alt="天外天" />
        <span class="title blue">天外天</span>
        <span class="title black">招募中心</span>
      </span>
      <span class="bar-tabs">
        <span
          :class="item.id == isActive ? 'active' : ''"
          class="bar-tab"
          v-for="item in tabs"
          v-bind:key="item.id"
          @click="changeTab(item.id)"
        >
          {{ item.text }}
        </span>
      </span>

      <span class="login-box" v-if="isLoggedIn" @click="login()">
        <img class="avatar" :src="userIcon" alt="" />
        <span class="name">Lorem ipsum</span>
      </span>

      <span class="login-box" v-else @click="login()">
        <span class="name">登录</span>
        </span>
    </div>
  </div>
  <div id="login-box" :style="isLoggedIn==0?'display:none':'display:block;zIndex:1'" style="background:white">
    <form action="">
      天外天账号登陆
      <label>
        <input v-model="uname" type="text" placeholder="邮箱/用户名/学号">
      </label>
      <label>
        <input v-model="upwd" type="password" placeholder="密码">
      </label>
       <v-btn color="#00a1e9" depressed>登录</v-btn>
    </form>
       <div id="tips">
          组织账号申请方式请见首页帮助；
        </div>
       <div id="tips">
          组织账号与个人天外天账号均可在此登录，但个人账号招募管理权限需先从组织账号添加；
        </div>
  </div>
</div>
</template>
<script>
import logoIcon from "@/assets/logo.png";
import userIcon from "@/assets/avatar.jpg";
export default {
  name: "Nav",
  data() {
    return {
      logoIcon,
      userIcon,
      isActive: 1,
      isLoggedIn: false,
      tabs: [
        {
          id: 1,
          text: "首页推荐",
          link: "/"
        },
        {
          id: 2,
          text: "我的申请",
          link: "/"
        },
        {
          id: 3,
          text: "招募管理",
          link: "/"
        },
        {
          id: 4,
          text: "更多帮助",
          link: "/"
        }
      ]
    };
  },
  methods: {
    changeTab(id) {
      this.isActive = id;
    },
    login() {
      this.isLoggedIn = !this.isLoggedIn;
    }
  }
};
</script>

<style lang="scss" scoped>

.nav-bar {
  display: flex;
  justify-content: center;
  background: #ffffff;
  height: 60px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  .bar-container {
    position: relative;
    width: 100%;
    max-width: 1120px;
    display: flex;
    .logo-box {
      height: 100%;
      display: flex;
      width: fit-content;
      img {
        margin: 10px 0;
        width: 40px;
        height: 40px;
        margin-right: 2px;
      }
      .title {
        cursor: default;
        font-size: 18px;
        line-height: 24px;
        margin: 18px 0;
        font-weight: 500;
      }
      .black {
        color: #454545;
      }
      .blue {
        color: #00a1e9;
      }
    }
    .bar-tabs {
      display: flex;
      margin-left: 22px;
      .bar-tab {
        cursor: pointer;
        line-height: 60px;
        padding: 0 20px;
        background: transparent;
        color: #a6a6a6;
        font-weight: 400;
        font-size: 16px;
      }
      .active {
        background: #f2f2f2;
        color: #454545;
      }
    }
    .login-box {
      position: absolute;
      right: 0;
      cursor: pointer;
      display: flex;

      .avatar {
        width: 30px;
        height: 30px;
        margin: 15px 0;
        border-radius: 15px;
        border: 2px solid #a6a6a6;
        margin-right: 10px;
      }
      .name {
        line-height: 60px;
        font-size: 18px;
        font-weight: 400;
        color: #a6a6a6;
        background: transparent;
      }
      &:hover {
        .name {
          color: #00a0e9;
        }
        .avatar {
          border-color: #00a0e9;
        }
        background: #f2f2f2;
      }
    }
  }
}
#login-box{
 padding:40px;
 display:none;
 width:580px;
 height: 463px;
 background: #eeeeee;
 border-radius: 5px;
 position:fixed;top:0px;left:0px;right:0px;bottom:0px;margin:auto;
 }
 #login-box>form{
 text-align: center;
 font-size:medium;
 font-family:'PingFang-SC-Medium';
 color:#595D60;
 }
 #login-box label{
 display: block;
 font-size: 15px;
 margin: 30px 0 0 0;
 }
 #login-box label input{
 width: 360px;
 height: 52px;
 background: #F6F6F6;
 border: 1px solid #D7D7D7;
 border-radius: 10px;
 }
 #login-box button{
 width: 360px;
 height: 52px;
 background: #00A1E9;
 border-radius: 10px;
 margin:30px 0 0 0;
 color:white;
 font-size:20px;
 }
 #tips{
   position:relative;
   color:#A6A6A6;
   width:339px;
   margin:0 auto;
   margin-top: 20px;
 }
 #close{
 font-size:18px;
 position: absolute;
 top:0;
 right: 5px;
 cursor: pointer;
}
</style>