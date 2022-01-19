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
function handLongpress(){
    alert('长安点击事件')
}

tap.bindEvent(dom, 'click', handClick)
tap.bindEvent(child, 'click', handClick2)
//长按点击解除绑定
function handLongpressRemove(){
    tap.removeEvent(child, 'click', handClick2);
}
tap.bindEvent(btn, 'click', handLongpressRemove)