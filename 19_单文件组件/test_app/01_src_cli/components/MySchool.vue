<template>
  <!-- 组件的结构，不参与编译 -->
  <div>
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showX">点击显示x</button>
  </div>
</template>

<script>
// 组件交互相关代码
  export default {
    name:"MySchool",
    data: function() { 
      return {
        schoolName: 'atguigu',
        address: 'Paris',
        x:888
      }
    },
    methods:{
      showX(){
        console.log('x',this.x);
      }
    }
  }
</script>

<style>
/* 组件的样式 */
 .demo{
   background-color: orange;
 }
</style>