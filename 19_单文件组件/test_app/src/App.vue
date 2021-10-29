<template>
<div class="container">
  <Category title="美食" :listData="foods">
  <img src="./assets/logo.png" alt="logo"/>
  </Category>
</div>
  
</template>

<script>
import Category from './components/Category'
import Category from './components/Category.vue'

export default {
  name:"App",
  components:{
    Category
  },
  data(){
    return {
      foods:["火锅","烧烤"],
      games:["尼尔","Ori & Forest"],
      films:["教父","尚硅谷"]
    }
  }
}
</script>

<style>

</style>