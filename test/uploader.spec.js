import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Uploader from '../src/components/uploader';

describe('vux-uploader-component', () => {
  it('render a input select file', () => {
    const uploader = mount(Uploader);
    console.log(uploader);
    expect(uploader.contains('input:file')).toBe(true);
  })
});

