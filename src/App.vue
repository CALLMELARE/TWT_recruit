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

    <router-view></router-view>
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
