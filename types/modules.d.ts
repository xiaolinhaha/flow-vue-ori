// 轻量模块类型存根，避免在未安装依赖时 TS 报错
declare module 'vue' {
  const Vue: any;
  export default Vue;
}

declare module 'vue-property-decorator' {
  export const Component: any;
  export class Vue {}
}

declare module '@vue/test-utils' {
  export function shallowMount(...args: any[]): any;
  export function mount(...args: any[]): any;
}

declare module 'tslib' {
  export const __extends: any;
  export const __assign: any;
  export const __rest: any;
}