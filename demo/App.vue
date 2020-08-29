<template>
  <div id="app">
    <div class="header">
      <h1>Vux Uploader</h1>
      <p>a weui uploader implementation for vux</p>
    </div>
    <div class="content">
      <uploader
        v-model="fileList"
        url="http://localhost:9090/upload"
        name="upload"
        :params="{
          token: '13579',
          linkid: '2323',
          modelname: 'modelname'
        }"
        :headers="{
          'custom-header': 'custom-info',
        }"
        withCredentials
        @on-change="onChange"
        @on-cancel="onCancel"
        @on-success="onSuccess"
        @on-error="onError"
        @on-delete="onDelete"
      />
    </div>
  </div>
</template>

<script>
import Uploader from '../src/index'
// import Uploader from '../dist/uploader.js';

export default {
  name: 'app',
  components: {
    Uploader,
  },
  data() {
    return {
      fileList: [
        {
          url: './assets/pic_160.png',
        },
      ],
    }
  },
  mounted() {
    // setTimeout(() => {
    // this.fileList.push({
    //   url: './assets/pic_160.png'
    // })
    // }, 1000);
  },
  methods: {
    onChange(fileItem, fileList) {
      console.log('on-change: ', fileItem, fileList)
    },
    onCancel() {
      console.log('on-cancel: Sucess')
    },
    onSuccess(res, fileItem) {
      console.log('on-success: ', res)
      fileItem.fileid = res.data
    },
    onError(res) {
      console.log('on-error: ', res)
    },
    onDelete(deleteItem, cb) {
      // setTimeout(() => {
      console.log('on-delete: ', deleteItem)
      cb && cb()
      // }, 3000);
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
