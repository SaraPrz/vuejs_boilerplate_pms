<template >
  <div class="cmp1">
    <span>
       <i class="fa ml4 fa fa-warning" aria-hidden="true"></i> {{message}}
    </span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: "its cmp1"
      }
    },
  }
</script>

<style lang="scss" scoped>
  .cmp1 {
    background-color:lightcoral;
    width: 20%;
    margin: 24px auto;
    padding: 8px;
    text-align: center;
  }
</style>
