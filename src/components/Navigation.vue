<template>
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
      padding: 0 20px;
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
</style>