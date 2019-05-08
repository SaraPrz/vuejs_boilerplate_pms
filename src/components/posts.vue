<template>
  <div class="fetchPost">
    <span class="title">fetch data from "jsonplaceholder" </span>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <span>
          {{post.id}}
        </span>
        <h2>
          {{post.title}}
        </h2>

      </li>
    </ul>
  </div>
</template>



<script>
import axios from 'axios';

export default {
   data () {
    return {
      posts: [],
    }
  },
  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts').then(response => {
      this.posts = response.data.slice(0,10);
    })
  }
}
</script>

<style lang="scss" scoped>
.fetchPost {
  ul {
    margin-top: 12px;
  }
  .title {
    color: #8d1212;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 12px;
  }
  border: 1px solid #7a7a7a;
  width: 50%;
  padding: 12px;
  margin-top: 24px;
  box-sizing: border-box;
  float: left;
  li {
    margin-bottom: 12px;
  }
  h2 {
    display: inline-block;
    font-size: 13px;
    padding-left: 12px;
  }
}
</style>

