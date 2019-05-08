<template >
  <div class="cmp2">
    <span>
      <i class="fa ml4 fa fa-warning" aria-hidden="true"></i> {{message}}
    </span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: "its cmp3"
      }
    },
  }
</script>

<style lang="scss" scoped>
  .cmp2 {
    background-color:#d24747;
    width: 20%;
    margin: 24px auto;
    padding: 8px;
    text-align: center;

  }
</style>
