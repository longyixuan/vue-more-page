<style lang="less">
  html,body {
    background: #F8F8F8;
  }
  .hygl-content {
    padding-bottom: 53px;
  }
</style>

<template>
  <div id="app">
    <slot></slot>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
  import tabBar from './tabbar'
  export default {
    name: 'layout',
    components: {
      tabBar
    }
  }
</script>