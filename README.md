# vux-uploader-component

a mobile vue component implementation for [weui](https://weui.io/weui.js/) uploader

## Install
```bash
npm install -S vux-uploader-component
```


## Mobile demo
![](./assets/qrcode.png)

[https://ejayyoung.github.io/vux-uploader-component/index.html](https://ejayyoung.github.io/vux-uploader-component/index.html)
> scan the qrcode and have a test in your device

## Todo
- [x] use HTML Media Capture to invoke mobile camera
- [x] use URL.createObjectURL generate the blob url for picture
- [x] in ios safari, according orientation auto rotate image
- [x] use canvas.toDataUrl get the compress base64 url
- [x] previewer for picture
- [x] delete for previewer
- [ ] upload to remote sever

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
