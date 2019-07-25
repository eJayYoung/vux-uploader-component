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
        v-model="fileList"
        url="http://localhost:9090/upload"
        name="upload"
        :params="{
          token: '13579',
          linkid: '2323',
          modelname: 'modelname'
        }"
        @onChange="onChange"
        @onCancel="onCancel"
        @onSuccess="onSuccess"
        @onError="onError"
        @onDelete="onDelete"
      />
    </div>
  </div>
</template>

<script>
import Uploader from '../src/index';
// import Uploader from '../dist/uploader.js';

export default {
  name: 'app',
  components: {
    Uploader,
  },
  data() {
    return {
      fileList: [],
    }
  },
  methods: {
    onChange(fileList) {
      console.log('onChange: ', fileList);
    },
    onCancel() {
      console.log('onCancel: Sucess');
    },
    onSuccess(res) {
      console.log('onSuccess: ', res);
    },
    onError(res) {
      console.log('onError: ', res);
    },
    onDelete() {
      console.log('onDelete: ', JSON.parse(JSON.stringify(this.fileList)));
    },
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
