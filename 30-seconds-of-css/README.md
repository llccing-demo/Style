# [30-seconds-of-css](https://github.com/30-seconds/30-seconds-of-css)

## animation

## interactivity

## layout

### offscreen

针对读屏软件的处理，目的是只想读屏软件展示

- [https://www.ibm.com/developerworks/cn/web/1003_sunqy_access/index.html](https://www.ibm.com/developerworks/cn/web/1003_sunqy_access/index.html) 开发和测试无障碍的 web 应用
- [https://www.zhangxinxu.com/wordpress/2017/01/voiceover-aria-web-accessible-iphone/](https://www.zhangxinxu.com/wordpress/2017/01/voiceover-aria-web-accessible-iphone/) 基于 VoiceOver 的移动 web 站无障碍访问实战
- [http://www.alloyteam.com/2012/10/how-to-develop-accessible-web-site-application/](http://www.alloyteam.com/2012/10/how-to-develop-accessible-web-site-application/) 如何开发无障碍的 web 网页

### last-item-with-remaining-available-height 最后一个元素占满剩下的高度

### 3-tile-layout 平铺3个元素

这里需要注意的是，不可以用flex、grid布局，只能用display: inline-block; 来做，所以会有间隔，通过标签间没有空余距离来做

### display-table-centering table布局居中一个元素

display: table的元素需要调整高度
display:table-cell的元素，能够使用 vertical-align: middle 属性

### lobotomized-owl-selector 落地猫头鹰选择器

```css
/* 给所有元素增加line-height */
* + * {
  line-height: 1.5;
}
```

### transform-centering 利用transform和定位实现垂直水平居中
```css
.child{
  transform: translate(-50%, -50%);
}
```

### box-sizing-reset 重置box-sizing属性

该属性决定了width的作用区域，box-sizing: border-box时，width=contentWidth+padding+border; box-sizing: content-box时，width=contentWidth;

### clearfix 清除浮动

### fix-image-in-container 缩小图片，同时保证图片原有比例

object-fix属性，指定可替换元素的内容应该如何适应到其使用的高度和宽度确定的框

### flexbox-centering 使用弹性盒模型居中内容

### grid-centering 使用栅格布局居中内容

### truncate-text-multiline 文字截断效果

### evenly-distributed-children 弹性盒模型，平均分配元素的几种方式
```css
/* 元素两侧靠边，中间距离均分 */
justify-content: space-between;
/* 两侧不靠边，每个元素两边距离都相等，最后的结果是，中间的距离是两边的两倍 */
justify-content: space-around;
/* 两侧不靠边，所有元素距离都相等 */
justify-content: space-evenly;
```

### constant-width-to-height-ratio 固定宽高比