<!--
 * @Author: TWT Studio
 * @Date: 2021-03-21 21:30:46
 * @LastEditTime: 2021-03-23 19:45:14
 * @Description: App.vue
-->
<template>
  <div class="layout">
    <keep-alive>
      <Nav />
    </keep-alive>
    <div class="overall-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Navigation";
export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style lang="scss" scoped>
.layout {
  margin: 0;
  width: 100%;
  height: 100%;
  .overall-container {
    margin: 0 auto;
    background: #f2f2f2;
  }
}
</style>
