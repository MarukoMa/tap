# tap事件封装
原理:利用touchstart 和 touchend 两个事件位置基本一致,若没有发生位移则是点击事件
## Installation

`$ npm tap `

## methods
### 
* 设置懒加载图片属性 
* type: String
* default: '.lazy-src'
     
    
### defaultImage
* 图片加载成功前,默认站位图片配置
* type: String 
* default: 'dist/lazy-img-loading.gif'
    
### preLoadHeight  
* 配置图片预加载功能,大于0则开启预加载功能
* type: Number   
* default: 0

### delay  
* 配置节流延迟执行毫秒数
* type: Number   
* default: 1000

### type  
* 配置节流功能 1 表时间戳版，2 表定时器版 默认走定时器
* type: Number   
* default: 2

## Usage
```javascript
   import { lazyLoadImage } from 'lazy-load-image-pre';
   lazyLoadImage({
        querySelect:'.lazy-src',
        defaultImage:'lib/lazy-img-loading.gif',
        preLoadHeight:500
    })

```
