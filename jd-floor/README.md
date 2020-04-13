# jd 的楼层图

是咋实现的呢

## 方案

```js
// 获取滚动条移动的距离
var scrollTop = $(document).scrollTop()

// 获取每层内容的在父元素中 垂直偏移距离
var floorOffsetTop = $(ele).offset().top

// 当 scrollTop > floorOffsetTop - 100 时，表示滚动到了相应的楼层，
// 减100，表示距离楼层 100px时，就增加 active 类。
if (scrollTop > floorOffsetTop - 100) {
  ...
}
```

## 参考

- https://www.dtmuban.com/course/727.html
- https://blog.csdn.net/Xu_Angel/article/details/79132897