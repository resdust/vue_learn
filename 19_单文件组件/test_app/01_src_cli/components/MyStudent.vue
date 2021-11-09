<template>
  <!-- 组件的结构，不参与编译 -->
  <div>
    <h2>学生名称：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
// 组件交互相关代码
  export default {
    name:"MyStudent",
    data: function() { 
      return {
        name: 'Jack',
        age: 99,
      }
    }
  }
</script>
