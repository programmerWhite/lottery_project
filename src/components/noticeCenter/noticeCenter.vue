<template>
  <div>
    <home-head></home-head>
    <development></development>
  </div>
</template>

<script>
  import homeHead from "../common/homeHead.vue"
  import development from "../common/development"

  export default {
      name:"noticeCenter",
      components:{homeHead,development}
  }
</script>

<style scoped>

</style>
