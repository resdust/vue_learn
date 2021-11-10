<template>
  <div class="school">
    <h2>学生姓名：{{name | mySlice}}</h2>
    <input type="text" v-fbind:value="name"/>
    <hr/>
    <button class="test" @click="action">点我调用插件hello</button>
  </div>
</template>

<script>
// 组件交互相关代码
  export default {
    name : "Student",
    data() {
      return {
        name: "Jannifier" 
      }
    },
    methods: {
      action(){
        this.hello()
      }
    }
  }
</script>

<style lang="less" scoped>
.school{
  background: #999;
  .test{
    color: blueviolet
  }
}
</style>
