<template>
  <div class="wrapper">
    <h1>NuxtJS</h1>
    <ul v-for="page in pages" v-bind:key="page">
      <li>
        <nuxt-link v-bind:to="page">{{page.split("-").join(" ")}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      pages: ["sample-task-list", "sample-modal"] 
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/sass/variables.scss";
  .wrapper {
    width: 90%;
    margin: 32px auto 0;
  }
  ul {
    margin: 8px auto;
    li{
      width: 100%;
      max-width: 320px;
      padding-left: 0.5rem;
      margin-bottom: 8px;
      line-height: 2;
      border-left: solid 6px $accent-color1;
      border-radius: 0 8px 8px 0;
      background-color: lighten($accent-color1, 35%); 
      transition: color 0.2s ease-out;
      &:hover{
        color: $accent-font-color;
      }
      &:before{
        content: "\f0a4";
        display: inline-block;
        left: 0;
        padding-right: 1rem;
        font-family: "Font Awesome 5 free";
        color: $accent-color1;
      }
      a {
        display: inline-block;
        width: calc(100% - 3rem);
      }
    }
  }
</style>
