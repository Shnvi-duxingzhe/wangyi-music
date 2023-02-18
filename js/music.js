var closes = document.getElementById('close'); /* 获取元素 */
closes.onclick = function () {
  /* 点击事件 */
  window.history.go(-1); /* 点击跳转 */
  console.log('点击了返回');
};
