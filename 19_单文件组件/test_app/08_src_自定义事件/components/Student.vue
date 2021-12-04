<template>
  <div class="school">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <h2>当前求和：{{number}}</h2>
    <button @click="add">点我求和结果加一</button>
    <button @click="sendStudentName">向App传递name</button>
    <button @click="unbind">解绑sendName事件</button>
    <button @click="death">销毁Student组件的实例对象（vc）</button>
  </div>
</template>

<script>
// 组件交互相关代码
  export default {
    name : "Student",
    data() {
      return {
        name: "Jannifier",
        age: "19",
        number: 0
      }
    },
    methods: {
      add(){
        console.log('add被调用了');
        this.number++
      },
      sendStudentName(){
        this.$emit('sendName',this.name,'This','is a','test')
        this.$emit('demo')
      },
      unbind(){
        this.$off('sendName') // 解绑一个自定义事件
        // this.$off(['sendName','demo']) // 解绑多个自定义事件
        // this.$off() //解绑所有自定义事件
      },
      death(){
        this.$destroy() // 销毁了当前组件对象
        // 所有响应式数据、自定义事件不能用
        // 但DOM节点和Window原生事件与自带函数不会失效
      }
    }
  }
</script>

<style lang="less" scoped>
.school{
  background: orange;
  .test{
    color: blueviolet
  }
}
</style>
