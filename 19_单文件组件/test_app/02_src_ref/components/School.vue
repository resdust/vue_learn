<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
// 组件交互相关代码
  export default {
    name : "school",
    data() {
      return {
        name:"Atguigu",
        address: "北京"
      }
    }
  }
</script>

<style>
.school{
  background: #777;
}
</style>
