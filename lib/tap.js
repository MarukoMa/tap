/*
原理:利用touchstart 和 touchend 两个事件位置基本一致,若没有发生位移则是点击事件
*/
function Tap() {
    this.eventLists = ['eventclick', 'eventlongpress']
}
Tap.prototype = {
/*
 * @desc bindEvent
 * @param dom dom对象
 * @param type 事件类型
 * @param callback 回调函数
 */
    bindEvent: function(dom, type, callback) {
        const eventType = `event${type}`
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
        dom[eventType].push(callback)
    },
    /*
    * @desc removeEvent
    * @param dom dom对象
    * @param type 事件类型
    * @param callback 回调函数
    */
    removeEvent: function(dom, type, callback) {
        const eventType = `event${type}`
        if (dom[eventType]) {
            for(let i = 0; i < dom[eventType].length; i++) {
                if (dom[eventType][i] === callback) {
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
        timeDiffer = new Date().getTime() - touchPosition.time
        touchPosition.x -= event.changedTouches[0].pageX
        touchPosition.y -= event.changedTouches[0].pageY
        if (Math.abs(touchPosition.x) < 5 && Math.abs(touchPosition.y) < 5) {
            if (timeDiffer < 1000) {
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
const tap = new Tap()
export { tap }