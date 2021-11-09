import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render解析template，因为这里导入的Vue默认是runtime vue，不包含模板解析器
  // .vue文件中组件的<template>可以被导入的compiler模块解析，但不能解析template配置项
  // 需要使用render函数接收到的createElement 函数去指定具体内容
  render: h => h(App),
}).$mount('#app')

// 写法推导
// new Vue({
//   el:'#app',
//   // render:createElement=>{return createElement('h1','你好啊')},
//   // render:createElement=>createElement('h1','你好啊'),
//   render:q=>q(App),
// })