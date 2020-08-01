<template>
  <Nuxt />
</template>

<script>
export default {
  data(){
    return {
      title: "hoge"
    }
  },
  head(){
    return {
      title: this.title,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
