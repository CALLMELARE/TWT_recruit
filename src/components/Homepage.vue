<template>
  <div class="cover"></div>
</template>
<script>
import cover from "@/assets/cover.jpg";
export default {
  name: "Nav",
  data() {
    return {
        cover,
    }
  }
}
</script>

<style lang="scss" scoped>
.cover{
  width:700px;
  height: 225px;
  margin-top:38px;
  margin-left:auto;
  margin-right:auto;
  background-image: url(../assets/cover.jpg);
  background-position: center;
  background-size: 100%;
}
</style>