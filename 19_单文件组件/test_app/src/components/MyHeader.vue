<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="todoTitle" @keyup.enter="add">
  </div>
</template>

<script>
// 引入生成全球唯一id的库
import {nanoid} from 'nanoid'
export default {
  name: 'MyHeader',
  methods: {
    add() {
      // 校验输入
      if (!this.todoTitle.trim()) return alert("输入不能为空")
      // 将用户输入的事件名称包装成一个todo对象
      const todoObj = {
        id : nanoid(),
        title: this.todoTitle,
        done:false
      }
      // 通知App添加todo对象
      this.$emit('addTodo',todoObj)
      // 清空输入栏
      this.todoTitle = ''
    }
  },
  data() {
    return {
      todoTitle: ''
    }
  }
}
</script>

<style lang="less" scoped>
.todo-header input{
  width: 100%;
}
</style>