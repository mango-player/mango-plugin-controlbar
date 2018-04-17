import {deepAssign, isObject, hasClassName, addClassName, removeClassName, setStyle, $} from 'mango-helper';
import Base from './base.js';

/**
 * 清晰度 配置
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
  vipIcon: `<svg id="pad-vip" viewBox="0 0 16 14.5" width="100%" height="100%"><path d="M.2 3.4l-.2.4h4.2L2.2.4l-.4.4L.2 3.4M9.9 3.8L12 0H3.6l2.3 3.8h4M15.7 6l.3-.4H.1l.3.4L7 14.1h.1a1.5 1.5 0 0 0 1.1.4l.8-.2L15.7 6M15.8 3.8l-.2-.4L13.9.8l-.4-.4-2 3.5z"></path></svg>`,
  alignRight: true,
  defaultEvent: {
    click: 'click'
  },
  list: [],  // 清晰度列表
  selected: 0, // 默认选择
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

  initTextList (clarityList, selected) {
    var items = clarityList || this.option.list
    this.option.list = items.reverse();
    // 设置默认状态
    if(items.length > 0 && selected) {
      this.$listUl.html('');
      this.$text.html(selected.name)
    }

    // 设置选项
    items.forEach(item => {

      const li = $(document.createElement('li'));
      const icon = '';
      li.attr('data-def', item.def);
      li.attr('data-name', item.name);

      if( item.vip != 0) {
        icon = this.option.vipIcon;
        li.addClass('vip');
      }

      li.html(item.name + icon);

      if(item.def == selected.def) {
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
      const def = elem.getAttribute('data-def') || '';
      const name = elem.getAttribute('data-name') || '';
      
      // 设置状态
      this.$listUl.find('li').removeClass('active');
      $(elem).addClass('active');
      this.$text.text(name);
      removeClassName(this.$dom, 'on')

      // 发送请求事件
      this.parent.emit('switchClarity', {def})
    }
  }

  clarityChanged(data) {
    if(data.error) {
      console.log('切换清晰度失败')
    }
  }
}
