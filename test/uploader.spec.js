import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Uploader from '../src/components/uploader';

describe('vux-uploader-component', () => {
  it('include a type=file input', () => {
    const uploader = mount(Uploader);
    expect(uploader.contains('input[type="file"]')).to.be.true;
  })
});

