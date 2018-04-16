import {deepAssign, isObject, hasClassName, addClassName, removeClassName, $} from 'mango-helper';
import Base from './base.js';

/**
 * playnext 配置
 */

const defaultOption = {
  tag: 'chimee-setting',
  html: `
    <chimee-setting-btn>
        <svg id="pad-set" viewBox="0 0 16 16" width="100%" height="100%">
            <path d="M15.7 6.8a1 1 0 0 0-.7-.3l-1.1-.3-.4-1 .5-1.1a1.1 1.1 0 0 0 .3-.7 1 1 0 0 0-.3-.7l-.5-.6a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3l-1 .6-.5-.2-.7-.3L9.4 1a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3h-.8a1 1 0 0 0-.7.3 1 1 0 0 0-.3.7l-.4 1.1-1 .5-.9-.6a1.1 1.1 0 0 0-.7-.3 1 1 0 0 0-.7.3l-.6.6a1 1 0 0 0-.3.7 1 1 0 0 0 .3.7l.5.9a5.9 5.9 0 0 0-.6 1.3L1 6.5a1 1 0 0 0-.7.3 1 1 0 0 0-.3.8v.8a1 1 0 0 0 .3.7 1 1 0 0 0 .7.3l1.1.3a6.4 6.4 0 0 0 .6 1.3l-.6 1a1.1 1.1 0 0 0 0 1.5l.6.5a1 1 0 0 0 1.5 0l1.1-.5 1 .4.2 1.1a1 1 0 0 0 .3.7.9.9 0 0 0 .8.3h.8a.9.9 0 0 0 .7-.3 1 1 0 0 0 .3-.7l.3-1.1.7-.2.5-.2 1.1.5a1.1 1.1 0 0 0 1.5 0l.5-.6a1 1 0 0 0 .3-.7 1 1 0 0 0-.3-.7l-.6-1.2.4-1 1.2-.4a1 1 0 0 0 .7-.3.9.9 0 0 0 .3-.7v-.8a.9.9 0 0 0-.3-.8zm-3.9 1.9a3.8 3.8 0 0 1-1.1 2.1l-.3.3a3.7 3.7 0 0 1-1.8.8H7.3l-1.4-.5-.2-.4-.6-.5-.4-.3a4.2 4.2 0 0 1-.6-1.5V7.3a3.7 3.7 0 0 1 .6-1.5l.4-.3.6-.5.3-.4 1.3-.5h1.4a3.5 3.5 0 0 1 1.8.9l.3.3a3.8 3.8 0 0 1 1.1 2.1v1.3z"></path>
        </svg>
    </chimee-setting-btn>
    <chimee-setting-panel>
        <span>跳过片头片尾：</span><span class="yes">是</span><span class="no">否</span>
    </chimee-setting-panel>
  `,
  defaultEvent: {
    click: 'click'
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

export default class Setting extends Base {
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

    this.$btn = this.$dom.find('chimee-setting-btn');
    this.$panel = this.$dom.find('chimee-setting-panel');
  }

  // 播放下一集信息
  setting(){
    
  }

  click (e) {
    const path = e.path || getElementPath(e.target);

    // 点击按钮
    if(path.indexOf(this.$btn[0]) !== -1) {
        if(hasClassName(this.$dom[0], 'on')) {
            removeClassName(this.$dom[0], 'on')
        } else {
            addClassName(this.$dom[0], 'on')
        }
        return;
    }
  }
}
