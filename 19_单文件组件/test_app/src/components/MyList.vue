<template>
  <ul class="todu-main">
    <MyItem/>
    <MyItem/>
    <MyItem/>
  </ul>
</template>

<script>
import MyItem from './MyItem'
export default {
  name: 'MyList',
  components: {
    MyItem
  }
}
</script>

<style scoped>

</style>