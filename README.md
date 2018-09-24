# vux-uploader

> a weui uploader implementation for vux

[weui 的实现 demo](https://weui.io/#uploader)

## Todo

- [x] 使用 h5 的 Html Media Capture 调用手机相机
- [x] 使用 URL.createObjectURL 获取内存里的图片地址
- [x] ios safari 拍照完图片会自动旋转
- [x] 根据设备像素比设置压缩比例
- [x] 使用 canvas 获取图片压缩后的base64地址
- [x] 图片的预览
- [x] 图片的删除
- [ ] 图片的上传

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
