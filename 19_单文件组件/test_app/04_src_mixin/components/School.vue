<template>
  <div class="school">
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  import {mixin, mixin_} from '../mixin'
  export default {
    name : "Student",
    data() {
      return {
        name:"Atguigu",
        address: "Beijing"
      }
    },
    mixins: [mixin, mixin_],
    mounted() {
      console.log('这是School');
    }
  }
</script>

<style>
.school{
  background: #aaa;
}
</style>
