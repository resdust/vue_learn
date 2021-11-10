<template>
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader/>
      <MyList/>
      <MyFooter/>
    </div>
  </div>
</div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyList from './components/MyList.vue'

export default {
  name:"App",
  components:{
    MyHeader,
    MyFooter,
    MyList
  },
  data() {
    return {
    }
  },
}
</script>

<style>

</style>