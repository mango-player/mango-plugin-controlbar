import {deepAssign, isObject, $, addEvent, removeEvent} from 'mango-helper';
import {autobind} from 'toxic-decorators';
import Base from './base.js';

/**
 * Volume 配置
 */

const defaultOption = {
  tag: 'chimee-volume',
  html: `
    <chimee-volume-state>
      <chimee-volume-state-mute></chimee-volume-state-mute>
      <chimee-volume-state-low></chimee-volume-state-low>
      <chimee-volume-state-high></chimee-volume-state-high>
    </chimee-volume-state>
    <chimee-volume-bar>
      <chimee-volume-bar-wrap>
        <chimee-volume-bar-bg></chimee-volume-bar-bg>
        <chimee-volume-bar-all>
          <chimee-volume-bar-ball></chimee-volume-bar-ball>
        </chimee-volume-bar-all>
        <chimee-volume-bar-track></chimee-volume-bar-track>
      </chimee-volume-bar-wrap>
    </chimee-volume-bar>
  `,
  animate: {
    icon: `
    <svg id="pad-voice" viewBox="0 0 13 14.6" width="100%" height="100%">
      <path d="M11 2.4q0-1.9-.7-2.3T8 1.4q-2.2 2.5-7 3a3 3 0 0 0-.7 1.4A5.7 5.7 0 0 0 0 7.4a5.5 5.5 0 0 0 .3 1.5 3 3 0 0 0 .7 1.4q4.7.5 7 3t2.3 1.3.7-2.2v-2.2a2.8 2.8 0 0 0 1.4-1.1 2.6 2.6 0 0 0 .6-1.7 2.9 2.9 0 0 0-.6-1.8 2.9 2.9 0 0 0-1.4-1z"></path>
    </svg>
    `,
  },
  defaultEvent: {
    mousedown: 'mousedown'
  }
};

const getElementPath = function (elem) {
  const path = [];
  if(elem === null) return path;
  path.push(elem);
  while(elem.parentNode !== null) {
    elem = elem.parentNode;
    path.push(elem);
  };
  return path;
};

export default class Volume extends Base {
  constructor (parent, option) {
    super(parent);
    this.parent.preVolume = 0;
    this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    this.init();
  }

  init () {
    super.create();
    this.$dom = $(this.$dom);
    this.$state = this.$dom.find('chimee-volume-state');
    this.$bar = this.$dom.find('chimee-volume-bar');
    this.$all = this.$dom.find('chimee-volume-bar-all');
    this.$bg = this.$dom.find('chimee-volume-bar-bg');
    this.layout = this.option.layout === 'vertical' ? 'vertical' : 'horizonal';

    // 判断是否是默认或者用户提供 icon
    if(this.option.icon && this.option.icon.mute && this.option.icon.low) {
      this.option.icon.high = this.option.icon.high || this.option.icon.low;
      this.$mute = this.$dom.find('chimee-volume-state-mute');
      this.$low = this.$dom.find('chimee-volume-state-low');
      this.$high = this.$dom.find('chimee-volume-state-high');
      this.$mute.html(this.option.icon.mute);
      this.$low.html(this.option.icon.low);
      this.$high.html(this.option.icon.high);
    }else if(!this.option.bitmap) {
      this.animate = true;
      this.$state.html(this.option.animate.icon);
    }

    this.$dom.addClass(`chimee-flex-component ${this.layout}`);
    this.changeState();

    this.watch_muted = this.parent.$watch('muted', (val) => {
      this.update();
    });
  }

  inited () {
    this.update();
  }

  destroy () {
    this.watch_muted();
    super.destroy();
  }

  changeState () {
    if(this.parent.muted || this.parent.volume === 0) {
      this.state = 'mute';
    }else if(this.parent.volume > 0 && this.parent.volume <= 0.5) {
      this.state = 'low';
    }else if(this.parent.volume > 0.5 && this.parent.volume <= 1) {
      this.state = 'high';
    }
    this.$dom.removeClass('mute low high');
    this.$dom.addClass(this.state);
  }

  click (e) {
    const path = e.path || getElementPath(e.target);
    if(path.indexOf(this.$state[0]) !== -1) {
      this.stateClick(e);
      return 'state';
    }else if(path.indexOf(this.$bar[0]) !== -1) {
      this.barClick(e);
      return 'bar';
    }
    return 'padding';
  }

  stateClick () {
    if(this.parent.muted) {
      this.parent.muted = false;
      return;
    }
    const currentVolume = this.parent.volume;
    this.parent.volume = currentVolume === 0 ? this.parent.preVolume : 0;
    this.parent.preVolume = currentVolume;
    this.changeState();
  }

  barClick (e) {
    const volume = this.layout === 'vertical'
      ? 1 - e.offsetY / this.$bg[0].offsetHeight
      : e.offsetX / this.$bg[0].offsetWidth;
    this.parent.volume = volume < 0 ? 0 : volume > 1 ? 1 : volume;
    this.update();
  }

  mousedown (e) {
    if(this.click(e) !== 'bar') return;
    this.startX = this.layout === 'vertical' ? e.clientY : e.clientX;
    this.startVolume = this.parent.volume;
    addEvent(window, 'mousemove', this.draging);
    addEvent(window, 'mouseup', this.dragEnd);
    addEvent(window, 'contextmenu', this.dragEnd);
  }

  /**
   * 更新声音条
   */
  update () {
    this.changeState();
    const volume = this.parent.muted ? 0 : this.parent.volume;
    this.layout === 'vertical' ? this.$all.css('height', `${volume * 100}%`) : this.$all.css('width', `${volume * 100}%`);
  }

  /**
   * 开始拖拽
   * @param {EventObject} e 鼠标事件
   */
  @autobind
  draging (e) {
    this.endX = this.layout === 'vertical' ? e.clientY : e.clientX;
    const dragVolume = this.layout === 'vertical' ? (this.startX - this.endX) / this.$bg[0].offsetHeight : (this.endX - this.startX) / this.$bg[0].offsetWidth;
    const dragAfterVolume = +(this.startVolume + dragVolume).toFixed(2);
    this.parent.volume = dragAfterVolume < 0 ? 0 : dragAfterVolume > 1 ? 1 : dragAfterVolume;
    this.parent.muted = false;
  }

  /**
   * 结束拖拽
   */
  @autobind
  dragEnd () {
    this.startX = 0;
    this.startVolume = 0;
    removeEvent(window, 'mousemove', this.draging);
    removeEvent(window, 'mouseup', this.dragEnd);
    removeEvent(window, 'contextmenu', this.dragEnd);
  }
}
