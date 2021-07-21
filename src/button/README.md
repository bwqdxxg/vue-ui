# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单

### 引入

```js
import Vue from 'vue';
import { Button } from '@bwqdxxg/vue-ui';

Vue.use(Button);
```

## 代码演示

### 基础用法

```html
<bx-button type="primary" />
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| type          | 按钮类型 | _string_ | `primary` |
| color `1.0.0` | 按钮颜色 | _string_ | -         |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
