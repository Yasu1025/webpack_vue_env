<template>
  <div id="app">
    <vue-header></vue-header>
    <div class="contents">
      <router-view/>
    </div>

    <footer>
      FOOTER HERE!!
    </footer>
    
    
  </div>
</template>

<script>
import Header from './layouts/Header';

export default {
  name: 'app',
  components: {
    "vue-header": Header
  },
  data () {
    return {
      test: "Hello Z Channel"
    }
  }
}
</script>
