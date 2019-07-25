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
    v-model="fileList"
    :url="remoteUrl"
    @on-change="onChange"
    @on-cancel="onCancel"
    @on-success="onSuccess"
    @on-error="onError"
    @on-delete="onDelete"
  >
  </uploader>
</template>
<script>
  import Uploader from 'vux-uploader-component'

  export default {
    components: {
      Uploader,
    },
    data() {
      return {
        fileList: [],
      }
    }
  }
</script>
```



## Props

property | type | default | description
---------| ---- | ------- | -----------
title | String | '图片上传' | 组件标题
files | Array | [] | 初始化数据源，通过`on-fileList-change`事件绑定v-model
limit | Number \| String | 5 | 限制上传图片个数
capture | Number \| String | false | 是否只选择调用相机
enableCompress | Boolean | true | 是否压缩
maxWidth | String \| Number | 1024 | 图片压缩最大宽度
quality | String \| Number | 0.92 | 图片压缩率
url | String | - | 上传服务器url
params | Object | - | 上传文件时携带的自定义参数
name | String | 'file' | 上传文件时FormData的Key，默认为file
autoUpload | Boolean | true | 是否自动开启上传
multiple | String \| Boolean | "" | 是否支持多选, `false`为不支持
readonly | Boolean | false | 只读模式（隐藏添加和删除按钮）

## Events
event | param | description
------| ----- | -----------
`on-change` | `(FileItem, FileList)` | 选完照片，删除照片时，FileList变化时触发，返回当前改变的FileItem，以及当前的FileList
`on-cancel` | `()` | 选择照片后取消的回调，用于错误提示
`on-success` | `(result, fileItem)` | 上传请求成功后的回调，返回远程请求的返回结果，及当前添加文件的FileItem
`on-error` | `(xhr)` | 上传请求失败后的回调，返回`xhr`
`on-delete` | `(cb)` | 删除照片时的回调,返回隐藏Previewer，删除图片的回调，没监听`onDelete`事件的时候，直接执行删除回调

## v-model
通过v-model可以在组件外部获取更新的组件的`FileList`

### 返回的FileItem格式
目前将File对象的属性复制组成FielItem, FileItem组成FileList，便于用户获取File对象的信息
```json
  {
    "blob": Blob,
    "fetchStatus": "success",
    "lastModified": 1552382376925,
    "lastModifiedDate": "Tue Mar 12 2019 17:19:36 GMT+0800 (中国标准时间)",
    "name": "YourImage.jpeg",
    "progress": 100,
    "size": 68905,
    "type": "image/jpeg",
    "url": "blob:http://0.0.0.0:8080/e3a87d67-a1dc-4909-b5fa-7bb3a7baad11",
  }
```

## Todo
- [x] 调用手机相机
- [x] 获取图片并渲染到浏览器
- [x] 解决图片EXIF旋转
- [x] 预览图片
- [x] 删除图片
- [x] 支持上传图片配置
- [x] 显示上传进度
- [x] 支持多选
- [x] 支持v-model获取FileList

## Development

```bash
# install dependencies
npm install

# serve with hot reload at http://0.0.0.0:8080/
npm run dev

# build for production with minification
npm run build:prod

# publish package
npm version patch
npm publish
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Relevant
- [vux](https://github.com/airyland/vux)
- [weui](https://github.com/weui/weui)
- [webpack-simple template](https://github.com/vuejs-templates/webpack-simple)

## License
[The MIT License](http://opensource.org/licenses/MIT)
