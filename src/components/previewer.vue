<template>
  <div class="vux-uploader_previewer" id="previewer" v-if="visible">
    <transition-group
      class="swiper-scroll"
      name="slide-fade"
      mode="out-in"
      tag="div"
    >
      <div
        :class="{
            'vux-uploader_preview-img': true,
            'current': index === current,
          }"
        v-show="index === current"
        v-for="(item, index) in list"
        :key="index"
        :style="{ backgroundImage: `url(${item.url})` }"
      ></div>
    </transition-group>
    <div class="vux-uploader_del" v-if="!readonly" @click="deleteImg"></div>
  </div>
</template>
<script>
import AlloyFinger from 'alloyfinger'

export default {
  name: 'Previewer',
  props: {
    current: {
      type: Number
    },
    visible: {
      type: Boolean
    },
    list: {
      type: Array,
      default: () => []
    },
    readonly: {
      type: Boolean
    }
  },
  data() {
    return {
      af: null,
    }
  },
  watch: {
    current: function(index) {
      this.currentIndex = index
    },
    visible: function(visible) {
      if (visible) {
        this.$nextTick(() => {
          const ele = document.querySelector('.swiper-scroll')
          this.af = new AlloyFinger(ele, {
            singleTap: this.handleSingleTap,
            swipe: this.handleSwipe
          })
        })
      } else {
        if (this.af) {
          this.af = this.af.destroy()
        }
      }
    }
  },
  mounted() {},
  methods: {
    hidePreviewer() {
      this.$emit('update:visible', false)
    },
    deleteImg() {
      this.$emit('on-delete')
    },
    handleSingleTap() {
      this.hidePreviewer()
    },
    handleSwipe(evt) {
      const { current, list } = this
      switch (evt.direction) {
        case 'Left':
          if (current < list.length - 1) {
            this.$emit('update:current', current + 1)
          } else if (current === list.length - 1) {
            this.$emit('update:current', 0)
          }
          break
        case 'Right':
          if (current > 0) {
            this.$emit('update:current', current - 1)
          } else if (current === 0) {
            this.$emit('update:current', list.length - 1)
          }
          break
      }
    }
  }
}
</script>
<style lang="less">
.vux-uploader_previewer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  z-index: 1000;
  .vux-uploader_preview-img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 60px;
    left: 0;
    background: center center no-repeat;
    background-size: contain;
  }
  .amplify {
    transform: scale(2, 2);
    width: 200%;
    heigh: 200%;
  }
  .vux-uploader_del {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #0d0d0d;
    color: #ffffff;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-family: 'weui';
    &:after {
      color: #ffffff;
      font-size: 22px;
      content: '\EA11';
    }
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
