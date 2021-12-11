export default {
  methods: {
    timeout (ms) {
      return new Promise((resolve) => {
        window.setTimeout(resolve, ms)
      })
    }
  }
}