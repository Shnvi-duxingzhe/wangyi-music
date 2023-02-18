//社区
var ts = document.querySelectorAll('.tab'); /* 获取元素 */
for (var i = 0; i < ts.length; i++) {
  tabs(ts[i]); /* 循环 */
}

function tabs(tab) {
  var span = tab.querySelectorAll('.tab-title>span'); /* 获取元素 */
  var tc = tab.querySelectorAll('.tc');
  for (var i = 0; i < span.length; i++) {
    span[i].index = i;
    span[i].onmouseover = function () {
      /* 鼠标放上去的方法 */
      for (var j = 0; j < tc.length; j++) {
        tc[j].style.display = 'none'; /* 改变样式 */
        span[j].className = ''; /* 改变类名 */
      }
      tc[this.index].style.display = 'block';
      this.className = 'cur';
    };
  }
}


