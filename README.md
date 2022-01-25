# tap事件封装
* 原理:利用touchstart 和 touchend 两个事件位置基本一致,若没有发生位移则是点击事件
* 支持事件解绑功能
## Installation

`$ npm i event-tap`
## options
### dom
* dom对象
### callback
* 事件的回调函数
* type: Function

### 事件解绑方法名 removeEvent

## Usage
```javascript
    import tap from 'event-tap';
    const dom = document.getElementById('content')
    const btn = document.getElementById('btn')
    const child = document.getElementById('child')
    function handClick(){
        console.log('点击content')
    }
    function handClick2(){
    console.log('点击child')
    }
    function handClick3(){
    console.log('再次点击content')
    }
    const opts = {
        dom: dom,
        callback: handClick
    }
    const tap1 = tap(opts)
    const opts2 = {
        dom: dom,
        callback: handClick3
    }
    tap(opts2)
    setTimeout(function(){
        tap1.removeEvent()
    },2000)
    const opts3 = {
        dom: child,
        callback: handClick2
    }
    tap(opts3) //child事件绑定

```

