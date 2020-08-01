<template>
  <div class="wrapper">
    <h1>Hello world!</h1>
    <p>
      english font sample
    </p>
    <p>
      日本語フォント参考 彼らの生命体
    </P>
    <ul>
      <li>
        <nuxt-link to="task-list">task-list</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/sass/variables.scss";
  .wrapper {
    width: 90%;
    margin: 16px auto 0;
  }
  ul {
    margin: 8px auto;
    li{
      transition: color 0.2s ease-out;
      &:hover{
        color: $accent-font-color;
      }
    }
  }
</style>
