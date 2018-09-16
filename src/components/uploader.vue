<template>
  <div class="vux-uploader">
    <div class="vux-uploader_hd">
      <p class="vux-uploader_title">{{ title }}</p>
      <div class="vux-uploader_info">{{ files.length }} / {{ max }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Uploader',
  props: {
    title: {
      type: String,
      default: '图片上传',
    },
    files: {
      type: Array,
      default: [],
    },
    max: {
      type: Number | String,
      default: 4,
    },
  },
}
</script>
<style lang="less">
.vux-uploader {
  padding: 10px 15px;
  .vux-uploader_hd {
    display: flex;
    .vux-uploader_title {
      flex: 1;
    }
    .vux-uploader_info {
      color: #b2b2b2;
    }
  }
}
</style>
