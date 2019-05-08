<template>
    <div class="uppermenu_wrapper">
      <ul>
        <li><router-link to="/" exact> home page </router-link></li>
        <li><router-link to="/cmp1" exact> Component One </router-link></li>
        <li><router-link to="/cmp2" exact> Component Two </router-link></li>
        <li><router-link to="/cmp3" exact> Component Three </router-link></li>
      </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.uppermenu_wrapper {
  background-color: lightgray;
  padding: 12px;
	width: 100%;
  ul {
    padding:8px;
    overflow: auto;
    li {
      float:left;
      padding-right: 12px;
      a {
        color:#000;
        font-size: 16px;
      }
    }
  }
}
.router-link-active {
	background-color: #4dc0a0;
	padding: 2px 4px;
  border-radius: 3px;

}
</style>
