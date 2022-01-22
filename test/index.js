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