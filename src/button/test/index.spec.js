import { mount } from '@vue/test-utils';
import Button from '..';

test('render bx button', () => {
  const wrapper = mount(Button);
  expect(wrapper.html()).toMatchSnapshot();
});
