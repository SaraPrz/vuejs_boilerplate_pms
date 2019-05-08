<template>
  <div class="main_outer_wrapper con12">
      <p>
      " its just a empty template for start developing "
    </p>
    <Mainmenu/>
    <router-view></router-view>
    <posts/>
    <CatFetchvuex/>
    </div>
</template>


<script>
  import cmp1 from './components/cmp1.vue';
  import cmp2 from './components/cmp2.vue';
  import cmp3 from './components/cmp3.vue';
  import Mainmenu from './components/Mainmenu.vue';
  import posts from './components/posts.vue';
  import CatFetchvuex from './components/CatFetchvuex.vue';

  export default {
    components: {
      Mainmenu,
      cmp1,
      cmp2,
      cmp3,
      posts,
      CatFetchvuex,
    },
  }
</script>

<style lang="scss" scoped>
.main_outer_wrapper > p {
	font-size: 28px;
	margin: 24px auto;
	width: 70%;
	font-weight: bold;
}

</style>

