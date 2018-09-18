<template>
  <div class="vux-uploader">
    <div class="vux-uploader_hd">
      <p class="vux-uploader_title">{{ title }}</p>
      <div class="vux-uploader_info">{{ fileList.length }} / {{ max }}</div>
    </div>
    <div class="vux-uploader_bd">
      <ul class="vux-uploader_files">
        <li class="vux-uploader_file" v-for="(item, index) in fileList" :key="index" :style="{
          backgroundImage: `url(${item})`
        }">
        </li>
      </ul>
      <div class="vux-uploader_input-box" v-show="files.length < max">
        <input class="vux-uploader_input" ref="input" type="file" :accept="accept" :capture="capture" @change="change"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Uploader",
  props: {
    title: {
      type: String,
      default: "图片上传"
    },
    files: {
      type: Array,
      default: []
    },
    max: {
      type: Number | String,
      default: 5
    },
    accept: {
      type: String,
      default: "image/*"
    },
    capture: {
      type: Boolean | String,
      default: "camera"
    }
  },
  data() {
    return {
      fileList: [],
    };
  },
  created() {
    this.fileList = this.fileList.concat(this.files);
  },
  methods: {
    change(e) {
      const target = e.target || e.srcElement;
      const file = target.files[0];
      this.readFile(file);
    },
    readFile(file) {
      let reader;
      if (typeof FileReader !== 'undefined') {
        reader = new FileReader();
      } else {
        alert('your brower are not support FileReader');
      }
      console.log(reader);
      reader.onload = e => {
        const result = e.target.result;
        this.fileList.push(result);
        console.log(this.fileList);
      }
      reader.readAsDataURL(file);
    }
  },
};
</script>
<style lang="less">
.vux-uploader {
  padding: 10px 15px;
  .vux-uploader_hd {
    display: flex;
    padding-bottom: 10px;
    .vux-uploader_title {
      flex: 1;
    }
    .vux-uploader_info {
      color: #b2b2b2;
    }
  }
  .vux-uploader_bd {
    overflow: hidden;
    .vux-uploader_files {
      list-style: none;
      .vux-uploader_file {
        float: left;
        margin-right: 9px;
        margin-bottom: 9px;
        width: 79px;
        height: 79px;
        background: no-repeat center center;
        background-size: cover;
      }
    }
    .vux-uploader_input-box {
      float: left;
      position: relative;
      margin-right: 9px;
      margin-bottom: 9px;
      width: 77px;
      height: 77px;
      border: 1px solid #d9d9d9;
      &:before,
      &:after {
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background-color: #d9d9d9;
      }
      &:before {
        width: 2px;
        height: 39.5px;
      }
      &:after {
        width: 39.5px;
        height: 2px;
      }
      .vux-uploader_input {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
    }
  }
}
</style>
