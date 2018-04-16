import {deepAssign, isObject, addClassName, removeClassName, $} from 'mango-helper';
import Base from './base.js';

/**
 * play 配置
 */

const defaultOption = {
  tag: 'chimee-control-state',
  html: `
    <chimee-control-state-play>
      <svg id="pad-play" viewBox="0 0 14 14.8" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M14 7.3a.9.9 0 0 0-.7-1L3 .9 1.5.2Q-.1-.5 0 1.6v12.1q.1 1 .6 1.2a2.2 2.2 0 0 0 1.7-.5l11.1-6.2q.7-.4.6-.9z"></path>
      </svg>
    </chimee-control-state-play>
    <chimee-control-state-pause>
      <svg id="pad-pause" viewBox="0 0 14 16" width="100%" height="100%"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M5 16V0H0v16h5M9 0h5v16H9z"></path>
      </svg>
    </chimee-control-state-pause>
  `,
  defaultEvent: {
    click: 'click'
  }
};

export default class Play extends Base {
  constructor (parent, option) {
    super(parent);
    this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    this.animate = false;
    this.init();
  }

  init () {
    // 创建 html ／ 绑定事件
    super.create();
    this.$dom = $(this.$dom);
    this.$dom.addClass('chimee-flex-component');
    this.changeState('pause');
  }

  changeState (state) {
    const nextState = state === 'play' ? 'pause' : 'play';
    this.state = state;
    addClassName(this.parent.$dom, nextState);
    removeClassName(this.parent.$dom, state);
  }

  click (e) {
    const nextState = this.state === 'play' ? 'pause' : 'play';
    this.changeState(nextState);
    this.parent.$emit(nextState);
  }
}
