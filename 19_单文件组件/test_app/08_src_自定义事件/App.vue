<template>
<div class="container">
  <h1>{{msg}}</h1>

  <!-- 通过父组件提前定义并传输props函数来实现：子向父传递数据 -->
  <School :getSchoolName="getSchoolName"/>

  <!-- 通过父组件给子组件绑定自定义事件来实现：子向父传递数据(通过@) -->
  <!-- <Student v-on:sendName="getStudentName"/> -->

  <!-- 通过父组件给子组件绑定自定义事件来实现：子向父传递数据(通过$on) -->
  <Student ref="student"/>
</div>
  
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
  name:"App",
  components:{
    School,Student
  },
  data() {
    return {
      msg:"欢迎学习Vue！"
    }
  },
  methods: {
    getSchoolName(value){
      console.log('App得到了school传来的name',value);
    },
    getStudentName(value,...params){
      console.log("App得到了student传来的name",value,params);
    },
    onDemo(){
      console.log('demo事件被触发');
    }
  },
  mounted(){
    // 绑定自定义事件
    this.$refs.student.$on('sendName',this.getStudentName)
    this.$refs.student.$on('demo',this.onDemo)

    // 事件只能触发一次，同@sendName.once
    // this.$refs.student.$once('sendName',this.getStudentName)
  }
}
</script>

<style>
.container {
  background-color: cadetblue;
}
</style>