# vux-uploader

> a weui uploader implementation for vux

[weui的实现demo](https://weui.io/#uploader)

## Todo
- [x] 使用h5的Html Media Capture调用手机相机
- [x] 使用FileReader读取内存中的文件(图片)
- [x] 使用canvas实现图片的压缩
 - [ ] bug: 图片过大导致浏览器奔溃
 - [ ] bug: ios safari 拍照完图片会自动旋转
 - [ ] pref: 压缩比例
- [x] 图片的预览
- [x] 图片的删除
- [ ] 图片的上传

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
