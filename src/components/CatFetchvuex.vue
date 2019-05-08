<template>
  <div class="UsingStore_wrap">
    <div class="UsingStore">
      <span class="title">
        fetch Data from Store
      </span>
      <button v-on:click="sendProps"> Fetch Data</button>
      <ul>
        <li v-for="cat in catsegories" :key="cat.id">
          <i class="fa fa-circle"></i>{{cat}}
        </li>
      </ul>
    </div>
  </div>
</template>



<script>

export default {
  name: 'catFechvuex',
  data() {
    return {
      catsegories : {}
    }
  },
  methods: {
    sendProps() {
      this.catsegories = this.$store.state.cats;
      console.log(this.$store.state.cats)
    }
  }
}
</script>

<style lang="scss">
  button {
    background-color: #4dc0a0;
    padding: 2px;
  }
  .UsingStore_wrap {
    padding-left: 16px;
    width: 50%;
    box-sizing: border-box;
    float: left;
    margin-top: 24px;
    .UsingStore {
      border: 1px solid #7a7a7a;
      padding: 12px;
      .title {
        color: #8d1212;
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 12px;
       }
      .fa-circle {
        font-size: 8px;
        color: #958e8e;
        padding-right: 8px;
      }
      ul {
        margin-top: 12px;
        li {
          margin-bottom: 8px;
        }
      }
    }
  }
</style>

