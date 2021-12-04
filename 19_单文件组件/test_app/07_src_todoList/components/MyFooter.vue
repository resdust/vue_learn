<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll">
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAllDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos', 'checkAllTodos', 'clearAllDone'],
  computed: {
    doneTotal(){
      return this.todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0) ,0)
    },
    total(){
      return this.todos.length
    },
    isAll:{
      set(value){
        this.checkAllTodos(value)
      },
      get(){
        return this.doneTotal === this.total && this.total>0
      }
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.todo-footer {
  padding: 5px;
  font-size: 1rem;
}

button:focus{
  box-shadow: none;
}
</style>