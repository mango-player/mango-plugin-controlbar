import './control.css';
import {accessor, applyDecorators} from 'toxic-decorators';
import {isObject, deepAssign, setStyle} from 'mango-helper';
import {createChild} from './createchild.js';

const majorColorStyle = `
  .chimee-flex-component svg *{
    fill: majorColor;
    stroke: majorColor;
  }
  chimee-progressbar-all{
    background: majorColor;
  }
  chimee-volume.chimee-flex-component chimee-volume-bar-all{
    background: majorColor;    
  }
  chimee-clarity-list li:hover,
  chimee-clarity-list li.active {
    color: majorColor;
  }
`;

const hoverColorStyle = `
  .chimee-flex-component svg:hover *{
    fill: hoverColor;
    stroke: hoverColor;
  }
`;

/**
 * 插件默认配置
 */

const defaultConfig = {
  hideBarTime: 2000, // hidebar 延迟时间， barShowByMouse 为 move 时有效，enter 时为0， 用户设置无效
  barShowByMouse: 'move', // 控制条显示由， move 还是 enter/leave 来控制显示／隐藏
};

const chimeeControl = {
  name: 'chimeeControl',
  el: 'chimee-control',
  data: {
    children: {},
    show: true,
    adlock: false,
    disabled: true
  },
  level: 99,
  operable: false,
  penetrate: false,
  create () {},
  init (videoConfig) {
    if(videoConfig.controls) {
      this.show = true;
      videoConfig.controls = false;
    }
    const _this = this;
    applyDecorators(videoConfig, {
      controls: accessor({
        get () {
          return _this.show;
        },
        set (value) {
          _this.show = Boolean(value);
          _this._display();
          return false;
        }
      }, {preSet: true})
    }, {self: true});
    this.config = isObject(this.$config) ? deepAssign(defaultConfig, this.$config) : defaultConfig;

    this.config.hideBarTime = this.config.barShowByMouse === 'move' ? this.config.hideBarTime : 0;
    this.$dom.innerHTML = `<chimee-control-wrap>
        <chimee-control-wrap-left></chimee-control-wrap-left>
        <chimee-control-wrap-right></chimee-control-wrap-right>
    </chimee-control-wrap>`;
    this.$wrap = this.$dom.querySelector('chimee-control-wrap');
    this.$wrapLeft = this.$dom.querySelector('chimee-control-wrap-left');
    this.$wrapRight = this.$dom.querySelector('chimee-control-wrap-right');
    this.children = createChild(this);
    this._setStyle();
  },
  destroy () {
    window.clearTimeout(this.timeId);
  },
  inited () {
    for(const i in this.children) {
      this.children[i].inited && this.children[i].inited();
    }
  },
  events: {
    // cms 一层接口成功
    cmsDataComplete(cmsData){
      this.children.progressBar.initKeyPoints(cmsData.points, cmsData.info.duration);
      this.children.progressBar.initFrames(cmsData.frame);
    },

    // 下一集信息返回的时候
    nextVideoInfo(nextvideoinfo){
      this.children.playNext.setNextVideoInfo(nextvideoinfo)
    },


    // 调度信息获取的时候设置清晰度列表
    dispactherDataComplete(data){
      this.children.clarity.initTextList(data.stream, data.stream[0])
    },

    clarityChanged(data) {
      this.children.clarity.clarityChanged(data)
    }

    frontAdBegin(){
      console.log('front ad begin')
      this.adlock = true;
      this._disable(true);
      setStyle(this.$dom, {
        visibility: 'hidden'
      });
    },
    videoPlay(){
      console.log('video play')
      this.adlock = false;
      this._disable(false);
    },
    loadstart () {
      // this._disable(true);
    },
    canplay () {
      // this._disable(false);
    },
    play () {
      this.children.play && this.children.play.changeState('play');
      this.config.barShowByMouse === 'move' && this._hideItself();
    },
    pause () {
      if(this.adlock) return;
      this.children.play && this.children.play.changeState('pause');
      this._showItself();
    },
    c_mouseenter () {
      if(this.adlock) return;
      if(this.config.barShowByMouse === 'move') return;
      this._showItself();
    },
    c_mousemove () {
      if(this.adlock) return;
      this._mousemove();
    },
    c_mouseleave () {
      if(this.adlock) return;
      if(this.config.barShowByMouse === 'move') return;
      this._hideItself();
    },
    durationchange () {
      this.children.progressTime && this.children.progressTime.updateTotal();
    },
    timeupdate () {
      this._progressUpdate();
    },
    progress () {
      this.children.progressBar && this.children.progressBar.progress();
    },
    volumechange () {
      this.children.volume && this.children.volume.update();
    },
    keydown (e) {
      if(this.disabled) return;
      e.stopPropagation();
      switch (e.keyCode) {
        case 32: {
          e.preventDefault();
          this.children.play && this.children.play.click(e);
          break;
        }
        case 37: {
          e.preventDefault();
          const reduceTime = this.currentTime - 10;
          this.currentTime = reduceTime < 0 ? 0 : reduceTime;
          this._mousemove();
          break;
        }
        case 39: {
          e.preventDefault();
          const raiseTime = this.currentTime + 10;
          this.currentTime = raiseTime > this.duration ? this.duration : raiseTime;
          this._mousemove();
          break;
        }
        case 38: {
          e.preventDefault();
          const raiseVolume = this.volume + 0.1;
          this.volume = raiseVolume > 1 ? 1 : raiseVolume;
          this._mousemove();
          break;
        }
        case 40: {
          e.preventDefault();
          const reduceVolume = this.volume - 0.1;
          this.volume = reduceVolume < 0 ? 0 : reduceVolume;
          this._mousemove();
          break;
        }
      }
    },
    click (e) {
      const time = new Date();
      const preTime = this.clickTime;
      this.clickTime = time;
      if(time - preTime < 300) {
        clearTimeout(this.clickTimeId);
        return;
      }
      this.clickTimeId = setTimeout(() => {
        !this.disabled && this.children.play && this.children.play.click(e);
      }, 300);

    },
    dblclick (e) {
      // this.dblclick = true;
      !this.disabled && this.children.screen && this.children.screen.click();
    }
  },
  methods: {
    _progressUpdate () {
      this.children.progressBar && this.children.progressBar.update();
      this.children.progressTime && this.children.progressTime.updatePass();
    },
    _hideItself () {
      // window.clearTimeout(this.timeId);
      // this.timeId = setTimeout(() => {
      //   let bottom = this.$wrap.offsetHeight;
      //   bottom = this.children.progressBar ? this.children.progressBar.$wrap[0].offsetTop - bottom : -bottom;
      //   setStyle(this.$wrap, {
      //     bottom: bottom + 'px'
      //   });
      //   setStyle(this.$dom, {
      //     visibility: 'hidden'
      //   });
      // }, this.config.hideBarTime);
    },
    _showItself () {
      window.clearTimeout(this.timeId);
      setStyle(this.$wrap, {
        bottom: '0'
      });
      setStyle(this.$dom, {
        visibility: 'visible'
      });
    },
    _display () {
      const display = this.show ? 'block' : 'none';
      setStyle(this.$dom, {
        display
      });
    },
    _mousemove (e) {
      if(this.paused || this.config.barShowByMouse === 'enter') return;
      this._showItself();
      this._hideItself();
    },
    // controlbar 不可以点
    // 键盘／鼠标事件不监听
    _disable (disabled) {
      if(!this.show) return;
      this.disabled = disabled;
      setStyle(this.$wrap, 'pointerEvents', disabled ? 'none' : 'auto');
    },
    _setStyle () {
      let css = '';
      css += this.config.majorColor ? majorColorStyle.replace(/majorColor/g, this.config.majorColor) : '';
      css += this.config.hoverColor ? hoverColorStyle.replace(/hoverColor/g, this.config.hoverColor) : '';
      const style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.innerHTML = css;
      document.head.appendChild(style);
    }
  }
};

export default chimeeControl;

