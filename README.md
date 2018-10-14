# vux-uploader-component
![](https://www.travis-ci.org/eJayYoung/vux-uploader-component.svg?branch=master)

a mobile vue component implementation for [weui](https://weui.io/weui.js/) uploader

## Install
```bash
npm install -S vux-uploader-component
```


## Mobile demo
![](./assets/qrcode.png)

[https://ejayyoung.github.io/vux-uploader-component/index.html](https://ejayyoung.github.io/vux-uploader-component/index.html)
> scan the qrcode and have a test in your device

## Usage
```html
<template>
  <uploader
    :files=[]
    url="your remote upload url"
    @onChange="onChange"
    @onPreview="onPreview"
    @onDelete="onDelete"
    @onSuccess="onSuccess"
    @onError="onError"
  >
  </uploader>
</template>
<script>
  import Uploader from 'vux-uploader-component'

  export default {
    components: {
      Uploader,
    },
  }
</script>
```

## Props

property | type | default | description
---------| ---- | ------- | -----------
title | String | '图片上传' | 组件标题
files | Array | [] | 图片文件列表
limit | Number \| String | 5 | 限制上传图片个数
capture | Number \| String | false | 是否只选择调用相机
enableCompress | Boolean | true | 是否压缩
maxWidth | String \| Number | 1024 | 图片压缩最大宽度
quality | String \| Number | 0.92 | 图片压缩率
url | String | - | 上传服务器url
autoUpload | Boolean | true | 是否自动开启上传

## Todo
- [x] use HTML Media Capture to invoke mobile camera
- [x] use URL.createObjectURL generate the blob url for picture
- [x] in ios safari, according orientation auto rotate image
- [x] use canvas.toDataUrl get the compress base64 url
- [x] previewer for picture
- [x] delete for previewer
- [x] support remote ajax post to upload
- [x] support progress bar base on xhr.upload.onprogress

## Development

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Relevant
- [vux](https://github.com/airyland/vux)
- [weui](https://github.com/weui/weui)
- [webpack-simple template](https://github.com/vuejs-templates/webpack-simple)

## License
[The MIT License](http://opensource.org/licenses/MIT)
