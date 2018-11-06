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
    @onCancel="onCancel"
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
multiple | String \| Boolean | "" | 是否支持多选, `false`为不支持

## Events
event | param | description
------| ----- | -----------
`onChange` | `(fileList)` | 选完照片后确定的回调，返回`FileList`
`onCancel` | `()` | 选择照片后取消的回调，用于错误提示
`onSuccess` | `(result)` | 上传请求成功后的回调，返回远程请求的返回结果
`onError` | `(xhr)` | 上传请求失败后的回调，返回`xhr`

## Todo
- [x] 调用手机相机
- [x] 获取图片并渲染到浏览器
- [x] 解决图片EXIF旋转
- [x] 预览图片
- [x] 删除图片
- [x] 支持上传图片配置
- [x] 显示上传进度
- [x] 支持多选

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
