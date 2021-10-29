<template>
  <div class="container">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽，挖个坑 -->
    <slot>我是插槽默认值</slot>
  </div>
</template>

<script>
// 组件交互相关代码
  export default {
    name:"MyStudent",
    props:['listData','title']
  }
</script>
