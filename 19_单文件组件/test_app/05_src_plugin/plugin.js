export default {
  install(Vue,x,y,z){
    // 插件必须有install方法，该方法可以接收到Vue原型和传递的参数
    // 对原型的修改，vm和vc都能用
    console.log('@@@install')
    console.log(x,y,z)
    
    // 全局过滤器
    Vue.filter('mySlice', function(value){
      return value.slice(0,4)
    })

    // 全局指令
    Vue.directive('fbind', {
      bind(e, binding){
        e.value = binding.value
      },
      inserted (e, _) {
        e.focus()
      },
      update(e,binding) {
        e.value = binding.value
      }
    })

    // 全局混入
    Vue.mixin({
      data(){
        return {
          x:100,
          y:200
        }
      }
    })

    // 给Vue原型添加一个方法
    Vue.prototype.hello = ()=>{
      alert('Hello!')
    }
  }
}