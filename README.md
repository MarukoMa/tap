# tap事件封装
原理:利用touchstart 和 touchend 两个事件位置基本一致,若没有发生位移则是点击事件
## Installation

`$ npm i event-tap`

## tap.bindEvent
事件绑定
### options
* dom: dom对象
* type: 事件类型, 可选值有: click(单点)、longpress(长安点击)
* callback:  事件的回调函数
     
### tap.removeEvent
事件回收
### options
* dom: dom对象
* type: 事件类型, 可选值有: click(单点)、longpress(长安点击)
* callback:  事件的回调函数
    
## Usage
```javascript
    import { tap} from 'event-tap';
    const dom = document.getElementById('content')
    const btn = document.getElementById('btn')
    const child = document.getElementById('child')
   tap.bindEvent(dom, 'click', handClick)
   //长按点击解除绑定
    function handLongpressRemove(){
        tap.removeEvent(child, 'click', handClick2);
    }
    tap.bindEvent(btn, 'click', handLongpressRemove)

```

