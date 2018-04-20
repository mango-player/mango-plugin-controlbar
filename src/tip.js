import {deepAssign, isObject, addClassName, removeClassName, $} from 'mango-helper';
import Base from './base.js';

/**
 * playnext 配置
 */

const defaultOption = {
  tag: 'mango-control-tip',
  html: ``,
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
  }


  click (e) {

  }
}
