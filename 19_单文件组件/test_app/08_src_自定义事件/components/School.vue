<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="sendSchoolName">向App传递name</button>
  </div>
</template>

<script>
// 组件交互相关代码
  export default {
    name : "school",
    data() {
      return {
        name:"Atguigu",
        address: "北京"
      }
    },
    props:[
      'getSchoolName'
    ],
    methods:{
      sendSchoolName(){
        this.getSchoolName(this.name)
      }
    }
  }
</script>

<style>
.school{
  background: palevioletred;
}
</style>
