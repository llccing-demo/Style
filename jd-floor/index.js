
// 监听滚动事件
function scroll() {
  $(document).scroll(function () {
    // 滚动高度
    var scrollTop = $(document).scrollTop()
    // 可见高度
    var viewHeight = $(window).height()
    // 内容高度
    var contentHeight = $(document).height()
    // console.log('滚动高度 $(document).scrollTop()', scrollTop)
    // console.log('可见高度 $(window).height()', viewHeight)
    // console.log('内容高度 $(document).height()', contentHeight)

    getPostion({ scrollTop, viewHeight, contentHeight })
  })
}

// 获取楼层的位置
function getPostion({ scrollTop, viewHeight, contentHeight }) {
  // 获取所有楼层
  var floors = $('.floors').children()
  Array.from(floors).forEach((ele, idx) => {
    toggleClass(ele, idx)
  })

  function toggleClass(ele, idx) {
    // 元素到 定位父级(element.offsetParent)的距离（偏移值），页面渲染完成后，是固定不变的
    var floorOffsetTop = $(ele).offset().top
    console.log('元素距离文档顶端的偏移值', floorOffsetTop)
    var activeElement = $('.board').find('li')[idx]

    // 这里减了100，表示 距离楼层div差100px时，就增加 active 类
    if (scrollTop > floorOffsetTop - 100) {
      $(activeElement).siblings().removeClass('active')
      $(activeElement).addClass('active')
    }

    // 如果展示内容在第一层之前，则需要将一层的 active 样式去掉
    if (idx === 0 && scrollTop < 400) {
      $(activeElement).removeClass('active')
    }
  }
}

window.onload = function () {
  scroll()
} 