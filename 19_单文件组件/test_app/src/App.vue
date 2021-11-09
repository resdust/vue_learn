<template>
<div class="container">
  <student name="Jack" gender="male" :age="18"/>
</div>
  
</template>

<script>
import Student from './components/Student.vue'

export default {
  name:"App",
  components:{
    Student
  },
  data() {
    return {
      msg:"欢迎学习Vue！"
    }
  },
}
</script>

<style>

</style>