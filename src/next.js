import {deepAssign, isObject, addClassName, removeClassName, $} from 'mango-helper';
import Base from './base.js';

/**
 * playnext 配置
 */

const defaultOption = {
  tag: 'chimee-control-playnext',
  html: `
    <chimee-control-playnext-btn>
        <svg id="pad-next" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M8.3 5.9L2.7.9 1.4.1Q-.1-.3 0 1.4v11.5q.1.9.6 1.1a2.1 2.1 0 0 0 1.6-.4l6.2-5.8q.7-.6.6-.9a1.8 1.8 0 0 0-.6-.9M11 0h4v14h-4z"></path>
        </svg>
    </chimee-control-playnext-btn>
    <chimee-control-nextvideoinfo></chimee-control-nextvideoinfo>
  `,
  defaultEvent: {
    click: 'click'
  }
};

export default class PlayNext extends Base {
  constructor (parent, option) {
    super(parent);
    this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    this.init();
  }

  init () {
    // 创建 html ／ 绑定事件
    super.create();
    this.$dom = $(this.$dom);
    this.$dom.addClass('chimee-flex-component');

  }



  // 播放下一集信息
  playNext(){

  }

  click (e) {
    this.playNext();
    this.parent.$emit('playNextVideo');
  }
}
