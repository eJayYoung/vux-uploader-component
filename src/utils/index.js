/**
 * Detecting vertical squash in loaded image.
 * Fixes a bug which squash image vertically while drawing into canvas for some images.
 */
function detectVerticalSquash(img) {
  let data;
  let ih = img.naturalHeight;
  let canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = ih;
  let ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  try {
    // Prevent cross origin error
    data = ctx.getImageData(0, 0, 1, ih).data;
  } catch (err) {
    // hopeless, assume the image is well and good.
    console.log("Cannot check verticalSquash: CORS?");
    return 1;
  }
  // search image edge pixel position in case it is squashed vertically.
  var sy = 0;
  var ey = ih;
  var py = ih;
  while (py > sy) {
    var alpha = data[(py - 1) * 4 + 3];
    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }
    py = (ey + sy) >> 1;
  }
  var ratio = py / ih;
  return ratio === 0 ? 1 : ratio;
}

/**
 * Detect subsampling in loaded image.
 * In iOS, larger images than 2M pixels may be subsampled in rendering.
 */
function detectSubsampling(img) {
  var iw = img.naturalWidth,
    ih = img.naturalHeight;
  console.log("图片宽高: ", iw, ih);
  if (iw * ih > 1024 * 1024) {
    // subsampling may happen over megapixel image
    var canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, -iw + 1, 0);
    // subsampled image becomes half smaller in rendering size.
    // check alpha channel value to confirm image is covering edge pixel or not.
    // if alpha value is 0 image is not covering, hence subsampled.
    console.log("ctx getImageData", ctx.getImageData(0, 0, 1, 1));
    return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
  } else {
    return false;
  }
}

/**
 * Transform canvas coordination according to specified frame size and orientation
 * Orientation value is from EXIF tag
 */
function transformCoordinate(canvas, ctx, width, height, orientation) {
  switch (orientation) {
    case 5:
    case 6:
    case 7:
    case 8:
      canvas.width = height;
      canvas.height = width;
      break;
    default:
      canvas.width = width;
      canvas.height = height;
  }
  switch (orientation) {
    case 2:
      // horizontal flip
      ctx.translate(width, 0);
      ctx.scale(-1, 1);
      break;
    case 3:
      // 180 rotate left
      ctx.translate(width, height);
      ctx.rotate(Math.PI);
      break;
    case 4:
      // vertical flip
      ctx.translate(0, height);
      ctx.scale(1, -1);
      break;
    case 5:
      // vertical flip + 90 rotate right
      ctx.rotate(0.5 * Math.PI);
      ctx.scale(1, -1);
      break;
    case 6:
      // 90 rotate right
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(0, -height);
      break;
    case 7:
      // horizontal flip + 90 rotate right
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(width, -height);
      ctx.scale(-1, 1);
      break;
    case 8:
      // 90 rotate left
      ctx.rotate(-0.5 * Math.PI);
      ctx.translate(-width, 0);
      break;
    default:
      break;
  }
}

module.exports = {
  detectVerticalSquash,
  detectSubsampling,
  transformCoordinate,
};
