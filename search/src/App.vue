<template>
  <div id="app">
      <panel></panel>
  </div>
</template>

<script>
  import panel from './components/panel.vue'
  export default {
    components:{
      panel
    }
  }
</script>
  
<style>
  body{
    background: url('./assets/background.png') no-repeat 50% 0;
  }
</style>
