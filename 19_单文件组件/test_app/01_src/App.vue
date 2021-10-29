<template>
<div>
  <!-- 脚手架开发可以写自闭合标签 -->
  <img src="./assets/logo.png" alt="logo"/>
  <MySchool/>
  <MyStudent/>
</div>
  
</template>

<script>
import MySchool from './components/MySchool'
import MyStudent from './components/MyStudent'

export default {
  name:"App",
  components:{
    MySchool,
    MyStudent
  }
}
</script>

<style>

</style>