import {deepAssign, isObject, addClassName, removeClassName, $} from 'mango-helper';
import {autobind} from 'toxic-decorators';
import Base from './base.js';

/**
 * Screen 配置
 */

const defaultOption = {
  tag: 'chimee-screen',
  html: `
    <chimee-screen-full>
      <svg id="pad-zoom-s" viewBox="0 0 15.9 15.9" width="100%" height="100%">
        <path d="M14.9 15.9a1 1 0 0 1-.7-.3l-3.8-3.8v1.6a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-1.6l3.8 3.8a1 1 0 0 1-.7 1.7zM6.5 7.5h-4a1 1 0 0 1 0-2h1.6L.3 1.7A1 1 0 0 1 1.7.3l3.8 3.8V2.5a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1z"></path>
      </svg>
    </chimee-screen-full>
    <chimee-screen-small>
      <svg id="pad-zoom" viewBox="0 0 15 15" width="100%" height="100%">
        <path class="cls-1" d="M14 15h-4a1 1 0 0 1 0-2h1.6L8.3 9.7a1 1 0 0 1 1.4-1.5l3.3 3.4V10a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1z"></path><path d="M6 7a1 1 0 0 1-.7-.3L2 3.4V5a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H3.4l3.3 3.2A1 1 0 0 1 6 7z"></path>
      </svg>
    </chimee-screen-small>
  `,
  defaultEvent: {
    click: 'click'
  }
};

export default class Screen extends Base {
  constructor (parent, option) {
    super(parent);
    this.state = 'small';
    this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    this.init();
  }

  init () {
    super.create();
    this.$dom = $(this.$dom);
    this.changeState(this.state);
    // addClassName(this.$dom, 'flex-item');
    this.$dom.addClass('chimee-flex-component');

    this.$full = this.$dom.find('chimee-screen-full');
    this.$small = this.$dom.find('chimee-screen-small');
    // 判断是否是默认或者用户提供 icon
    if(this.option.icon && this.option.icon.full && this.option.icon.small) {
      // if((!this.option.icon.play && this.option.icon.puase) || (this.option.icon.play && !this.option.icon.puase)) {
      //   console.warn(`Please provide a play and pause icon！If you can't, we will use default icon!`);
      // }
      this.$full.html(this.option.icon.full);
      this.$small.html(this.option.icon.small);
    }else if(this.option.bitmap) {
      this.$full.html('');
      this.$small.html('');
    }
  }

  changeState (state) {
    const removeState = state === 'small' ? 'full' : 'small';
    addClassName(this.parent.$dom, state);
    removeClassName(this.parent.$dom, removeState);
  }

  click () {
    let full = false;
    if(this.state === 'small') {
      this.state = 'full';
      full = true;
    }else{
      this.state = 'small';
      full = false;
    }
    this.changeState(this.state);
    this.parent.$fullscreen(full, 'container');
    if(full) {
      this.watch_screen = this.parent.$watch('isFullscreen', this.screenChange);
    }else{
      this.watch_screen();
    }
  }
  @autobind
  screenChange () {
    if(!this.parent.fullscreenElement) return;
    this.state = 'small';
    this.changeState('small');
    this.parent.$fullscreen(false, 'container');
  }
}
