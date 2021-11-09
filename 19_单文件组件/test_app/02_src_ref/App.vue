<template>
<div class="container">
  <h1 v-text="msg" ref="title"></h1>
  <button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
  <School ref="sch"/>
</div>
  
</template>

<script>
import School from './components/School'

export default {
  name:"App",
  components:{
    School
  },
  data() {
    return {
      msg:"欢迎学习Vue！"
    }
  },
  methods: {
    showDOM(){
      console.log(this.$refs.title) //真实DOM元素
      console.log(this.$refs.btn) //真实DOM元素
      // console.log(document.getElementById('sch))
      // 上方只能获得DOM元素，下方可以得到组件实例对象
      console.log(this.$refs.sch) //School组件的实例对象
    }
  }
}
</script>

<style>

</style>