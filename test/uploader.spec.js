import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Uploader from '../src/components/uploader';


const uploader = mount(Uploader, {
  propsData: {
    files: [
      './assets/pic_160.png'
    ]
  }
});

describe('vux-uploader-component', () => {
  describe('input', () => {
    it('has type=file attribute', () => {
      expect(uploader.find('input').attributes('type')).to.equal('file');
    });
  });
  describe('props', () => {
    describe('title', () => {
      it('default to be 图片上传', () => {
        expect(uploader.find('.vux-uploader_title').text()).to.equal('图片上传');
      });
    });
    describe('files', () => {
      it('length should be 1', () => {
        expect(uploader.findAll('.vux-uploader_file').length).to.equal(1);
      });
    });
  });
});

