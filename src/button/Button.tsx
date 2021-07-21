import { defineComponent } from 'vue'
import { createNamespace } from '../utils';
import './index.less'

const [name, bem] = createNamespace('button');

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

export default defineComponent({
  name,

  emits: ['click'],

  setup(props, { emit, slots }) {
    const renderText = () => {
      let text = slots.default()
      return <span>{text}</span>;
    };

    return () => {
      return (
        <button className="bx-button">{renderText()}</button>
      )
    }
  }
})
