

/**
 * @desc tap
 * @param {object} opts
 * @param dom 对象
 * @param type 类型click 和 longpress
 * @param callback 点击回调函数
 * @param isRemoveEle 移除事件绑定,默认值为否
 */
 const defaultOpts = {
    dom:'',
    type:'click',
    callback:null,
    isRemoveEle:false
}
/*
原理:利用touchstart 和 touchend 两个事件位置基本一致,若没有发生位移则是点击事件
*/
function Tap(opts) {
    this.opts = Object.assign(defaultOpts,opts);
    this.eventLists = ['eventclick', 'eventlongpress']
    if(!this.opts.isRemoveEle){
        this.bindEvent()
    }else{
        this.removeEvent()
    }
    
}
Tap.prototype = {
/*
 * @desc bindEvent
 * @param dom dom对象
 * @param type 事件类型
 * @param callback 回调函数
 */
    bindEvent: function() {
        const eventType = `event${this.opts.type}`
        const dom = this.opts.dom
        if (!dom) {
            console.error('dom is null or undefined')
        }
        let flag  = this.eventLists.some(key => dom[key])
        if (!flag) {
            dom.addEventListener('touchstart', this.touchStart)
            dom.addEventListener('touchend', this.touchEnd)
        }
        if (!dom[eventType]) {
            dom[eventType] = []
        }
        dom[eventType].push(this.opts.callback)
    },
    /*
    * @desc removeEvent
    * @param dom dom对象
    * @param type 事件类型
    * @param callback 回调函数
    */
    removeEvent: function() {
        const eventType = `event${this.opts.type}`
        const dom = this.opts.dom
        if (dom[eventType]) {
            for(let i = 0; i < dom[eventType].length; i++) {
                if (dom[eventType][i] === this.opts.callback) {
                  dom[eventType].splice(i, 1)
                  i--
                }
            }
            if (dom[eventType] && dom[eventType].length === 0) {
                delete dom[eventType]
                let flag  = this.eventLists.every(key => !dom[key])
                if (flag) {
                    dom.removeEventListener('touchstart', this.touchStart)
                    dom.removeEventListener('touchend', this.touchEnd)
                }
            }
          }
    },
    /*
     * @desc touchstart事件
     * @param {function}
    */
    touchStart: function(event) {
        // touchPosition  记录触摸位置信息
        this.touchPosition = {
            x: event.touches[0].pageX,
            y: event.touches[0].pageY,
            time: new Date().getTime()
        }
    },
    /**
     * touchend事件，计算两个事件之间的位移量
     * 如果位移量很小或没有位移，看做点击事件
     * */
    touchEnd: function(event) {
        const touchPosition = this.touchPosition
        delete this.touchPosition
        const timeDiffer = new Date().getTime() - touchPosition.time
        touchPosition.x -= event.changedTouches[0].pageX
        touchPosition.y -= event.changedTouches[0].pageY
        if (Math.abs(touchPosition.x) < 5 && Math.abs(touchPosition.y) < 5) {
            if (timeDiffer < 500) {
                if (this['eventclick']) {
                    this['eventclick'].map(function(fn){
                        fn(event);
                    });
                }
            } else {
                if (this['eventlongpress']) {
                    this['eventlongpress'].map(function(fn){
                        fn(event);
                    });
                }
            }
            return;
        }
    }
}
Tap.prototype.constructor = Tap
const tap =  function(opts){
   return new Tap(opts)
}
// export { tap }