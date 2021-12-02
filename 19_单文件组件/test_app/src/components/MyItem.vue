<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!-- 以下代码也能实现功能，但修改了props传输对象的属性值，违反了props不能修改的原则 -->
      <!-- Vue没有报错是因为它只监视对象的地址，不监视值是否改变 -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props:{
    todo:Object,
    checkTodo: Function,
    deleteTodo: Function
  },
  methods:{
    handleCheck(id) {
      // 通知App组件修改todo的done值
      this.checkTodo(id)
    },
    handleDelete(id) {
      if(confirm('确定删除吗？')) {
        this.deleteTodo(id)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @height: 36px;
  @fontSize: 1rem;

  li {
		list-style: none;
    height: @height;
    line-height: @height;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

  li label {
    // font-size: @fontSize;
    float: left;
    cursor: pointer;
  }

  li input{
    vertical-align: middle;
    margin-right: 6px;
    top: -1px;
    position: relative;
  } 

  .btn-check:focus + .btn-danger, .btn-danger:focus {
    box-shadow: none;
  }
  li button {
    float: right;
    height: 30px;
    vertical-align: middle;
    margin-top: 3px;
    background-color: #dc3545;
    // display: block;
  }

  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background-color: #ddd;
  }

  li:hover button {
    background-color: rgba(175, 62, 62, 1);
    display: block;
  }

</style>