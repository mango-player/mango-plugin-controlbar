import { deepAssign, isObject, addClassName, removeClassName, $ } from 'mango-helper';
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
    <chimee-control-nextvideoinfo class="u-next-box">
        <h2 class="tit">下一个</h2>
        <div class="nextbox">
            <p class="pic"><img src="" width="130" height="74"></p>
            <p class="n"></p>
            <p class="t"></p>
        </div>
    </chimee-control-nextvideoinfo>
    <chimee-control-nextvideo-tip class="u-next-box">
        <h2 class="tit"><i>10</i> 秒之后，即将为您播放</h2>
        <div class="nextbox">
            <p class="pic"><img src="" width="130" height="74"></p>
            <p class="n"></p>
            <p class="t"></p>
        </div>
    </chimee-control-nextvideoinfo>
  `,
  defaultEvent: {
    click: 'click'
  }
};

export default class PlayNext extends Base {
  constructor(parent, option) {
    super(parent);
    this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    this.init();
  }

  init() {
    // 创建 html ／ 绑定事件
    super.create();
    this.$dom = $(this.$dom);
    this.$dom.addClass('chimee-flex-component');
    this.$nextvideo = this.$dom.find('.u-next-box');
    this.$nextvideotip = this.$dom.find('chimee-control-nextvideo-tip')
  }

  // 下一集视频信息获取的时候
  setNextVideoInfo(nextvideoinfo) {
    this.$nextvideo.find('img').attr('src', nextvideoinfo.img)
    this.$nextvideo.find('.n').html(nextvideoinfo.title)
    this.$nextvideo.find('.t').html(nextvideoinfo.duration)
  }

  // 视频即将结束
  onVideoWillEnd() {
    let time = 10
    this.$nextvideotip.find('.tit i').html(time);
    this.$nextvideotip.css('display', 'block');
    this.downcounttimer = setInterval(()=>{
      time--;
      this.$nextvideotip.find('.tit i').html(time);
      if(time <= 1) {
        this.hideWillEndTip();
      }
    }, 1000)
  }

  // 隐藏视频即将结束弹窗
  hideWillEndTip(){
    this.$nextvideotip.css('display', 'none');
    this.downcounttimer && clearInterval(this.downcounttimer);
  }

  // 播放下一集信息
  playNext() {
    if (this.parent.config.web_jump) {
      // 如果交给页面控制刷新
      this.parent.requesetRefreshPage()
    } else {
      // 如果页面上有自定义的nextUrl,直接取这个值并返回 
      let nextUrl = this.parent.getNextPlayUrl()
      if (nextUrl) {
        window.location.href = nextUrl
        return;
      } else if (this.nextVideoInfo && this.nextVideoInfo.url) {
        window.location.href = this.nextVideoInfo.url;
      }
    }

  }

  click(e) {
    this.playNext();
    this.parent.$emit('playNextVideo');
  }
}
