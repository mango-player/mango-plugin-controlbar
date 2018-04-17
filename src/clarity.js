import {deepAssign, isObject, hasClassName, addClassName, removeClassName, setStyle, $} from 'mango-helper';
import Base from './base.js';

/**
 * play 配置
 */

const defaultOption = {
  tag: 'chimee-clarity',
  width: '2em',
  html: `
    <chimee-clarity-text>标清</chimee-clarity-text>
    <chimee-clarity-list>
      <ul></ul>
    </chimee-clarity-list>
  `,
  alignRight: true,
  defaultEvent: {
    click: 'click'
  },
  list: [],  // 清晰度列表
  duration: 10,
  increment: 1
};

export default class Clarity extends Base {
  constructor (parent, option) {
    super(parent);
    this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    this.init();
  }

  init () {
    super.create();
    addClassName(this.$dom, 'chimee-flex-component');
    
    this.$text = $(this.$dom).find('chimee-clarity-text');
    this.$list = $(this.$dom).find('chimee-clarity-list');
    this.$listUl = this.$list.find('ul');

    this.initTextList();
  }

  initTextList (clarityList) {
    var items = clarityList || this.option.list
    this.option.list = items;
    // 设置默认状态
    if(items.length > 0) {
      this.$listUl.html('');
      this.$text.html(items[0].name)
    }

    // 设置选项
    items.forEach(item => {
      const li = $(document.createElement('li'));
      li.attr('data-url', item.src);
      li.text(item.name);
      if(item.src === this.parent.$videoConfig.src) {
        this.$text.text(item.name);
        li.addClass('active');
      }
      this.$listUl.append(li);
    });

    
  }

  click (e) {
    const elem = e.target;

    if(elem.tagName === 'CHIMEE-CLARITY-TEXT') {
      if(hasClassName(this.$dom, 'on')) {
        removeClassName(this.$dom, 'on')
      } else {
        addClassName(this.$dom, 'on')
      }
      return;
    }
    if(elem.tagName === 'LI') {
      const url = elem.getAttribute('data-url') || '';
      this.switchClarity(url).then(() => {
        this.loadOption = undefined;
        Array.from(elem.parentElement.children).map(item => {
          removeClassName(item, 'active');
        });
        addClassName(e.target, 'active');
        this.$text.text(e.target.textContent);
      }).catch((e) => {
        console.warn(e);
      });;
    }
  }

  switchClarity (url) {
    if (this.loadOption) {
      this.loadOption.abort = true;
    }
    this.loadOption = {
      duration: this.option.duration,
      repeatTimes: 3,
      immediate: true,
      increment: this.option.increment
    };
    return this.parent.$silentLoad(url, this.loadOption);
  }

}
