import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Uploader from '../src/components/uploader';
import { handleFile } from '../src/utils';

describe('vux-uploader-component', () => {
  describe('input', () => {
    it('has type=file attribute', () => {
      const uploader = mount(Uploader);
      expect(uploader.find('input').attributes('type')).to.equal('file');
    });
  });
  describe('props', () => {
    describe('title', () => {
      it('default to be 图片上传', () => {
        const uploader = mount(Uploader);
        expect(uploader.find('.vux-uploader_title').text()).to.equal('图片上传');
      });
    });
    describe('files', () => {
      const wrapper = mount(Uploader, {
        propsData: {
          files: [
            './assets/pic_160.png',
          ],
        }
      });
      it('length should be 1', () => {
        expect(wrapper.findAll('.vux-uploader_file').length).to.equal(1);
      });
    });
    describe('limit', () => {
      const wrapper = mount(Uploader, {
        propsData: {
          files: [
            './assets/pic_160.png',
            './assets/pic_160.png',
            './assets/pic_160.png',
            './assets/pic_160.png',
            './assets/pic_160.png',
            './assets/pic_160.png',
          ],
        }
      });
      it('input is unVisible', () => {
        expect(wrapper.find('.vux-uploader_input-box').isVisible()).to.be.false;
      });
    });
  });
  describe('Handle File', () => {
    it('convert file to blob', () => {
      const file = new File(['test'], 'test.png');
      handleFile(file)
        .then(blob => {
          expect(blob).to.be.an.instanceof(Blob);
        })
    });
  });
});

