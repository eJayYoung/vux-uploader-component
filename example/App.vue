<template>
  <div id="app">
    <div class="header">
      <h1>Vux Uploader</h1>
      <p>a weui uploader implementation for vux</p>
    </div>
    <div class="content">
      <uploader
        :files="[
          './assets/pic_160.png',
        ]"
        url="http://localhost:9090/upload"
      />
    </div>
  </div>
</template>

<script>
import Uploader from '../src/components/uploader';

export default {
  name: 'app',
  components: {
    Uploader,
  },
}
</script>

<style lang="less">
body {
  background: #f8f8f8;
  margin: 0;
  padding: 0;
  p {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    .header {
      padding: 40px;
    }
    .content {
      background: #fff;
    }
  }
}

</style>
