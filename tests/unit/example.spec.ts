import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('renders title', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.text()).toContain('Vue 2 + TypeScript 项目初始化完成');
  });
});
