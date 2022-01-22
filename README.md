# tap事件封装
原理:利用touchstart 和 touchend 两个事件位置基本一致,若没有发生位移则是点击事件
## Installation

`$ npm i event-tap`
## options
### dom
* dom对象
### type
* 事件类型
* type: String
* 可选值有: click(单点)、longpress(长安点击),default: 'click'
### callback
* 事件的回调函数
* type: Function
### isRemoveEle 
* 是否移除事件绑定,默认值为否
* type: Boolean
* default: false
     

## Usage
```javascript
    import { tap} from 'event-tap';
    const dom = document.getElementById('content')
    const btn = document.getElementById('btn')
    const child = document.getElementById('child')
    function handClick(){
        alert('点击content')
    }
    function handClick2(){
        alert('点击child')
    }
    function handRemoveEle(){
        alert('点击事件已移除')
    }
    const opts = {
        dom: dom,
        type: 'click',
        callback: handClick,
        isRemoveEle: false
    }
    tap(opts)
    const opts2 = {
        dom: child,
        type: 'click',
        callback: handClick2,
        isRemoveEle: false
    }
    tap(opts2)
    // //点击按钮解除child点击事件绑定
    function handRemoveEle(){
        opts2.isRemoveEle = true
        tap(opts2);
    }
    const opts3 = {
        dom: btn,
        type: 'click',
        callback: handRemoveEle
    }
    tap(opts3)

```

