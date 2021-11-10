<template>
  <div class="school">
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2 >学生性别：{{gender}}</h2>
  </div>
</template>

<script>
  import {mixin, mixin_} from '../mixin'

  export default {
    name : "Student",
    data() {
      return {
        name: "Jack",
        gender: "male"
      }
    },
    mixins: [mixin, mixin_],
    mounted() {
      console.log('这是Student');
    }
  }
</script>

<style>
.school{
  background: #aaa;
}
</style>
