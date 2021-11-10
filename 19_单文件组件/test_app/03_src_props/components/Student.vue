<template>
  <div class="school">
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{gender}}</h2>
    <h2>学生年龄myAge：{{myAge}}</h2>
    <h2>学生年龄age：{{age}}</h2>
    <button @click="updateAge">修改props值</button>
  </div>
</template>

<script>
// 组件交互相关代码
  export default {
    name : "Student",
    data() {
      return {
        msg: "我是学生",
        // name : "Jane", //有props时，外部传入的props优先级更高
        myAge : this.age, // 通过这种方法拿到外部传入的age，修改age
      }
    },
    // props: ['name', 'gender', 'age'] //简单声明接收

    // 接收的同时对数据进行类型限制
    // props : {
      //   name: String,
    //   age: Number,
    //   sex: String
    // }

    // 接收的同时对数据进行: 类型限制+必要性的限制
    props : {
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        default: 99
      },
      gender: {
        type: String,
        required: true
      },
    },
    methods: {
      updateAge() {
        // 直接修改props传进的值会有警告
        // this.age = 100,
        this.myAge = 88
      }
    }
  }
</script>

<style>
.school{
  background: #999;
}
</style>
