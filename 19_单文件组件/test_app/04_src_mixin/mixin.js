export const mixin = {
  methods: {
    showName() {
      alert(this.name)
    }
  }
}

export const mixin_ = {
  data() {
    return {
      x:666
    }
  },
  mounted() {
    console.log('这是mixin_')
  }
}