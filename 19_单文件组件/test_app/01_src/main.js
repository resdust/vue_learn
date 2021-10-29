import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render解析template，因为这里导入的Vue默认是runtime vue，不包含模板解析器
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el:'#app',
//   // render:createElement=>{return createElement('h1','你好啊')},
//   // render:createElement=>createElement('h1','你好啊'),
//   render:q=>q(App),
// })