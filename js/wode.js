var data = [
  {
    img: './img/wode1.png',
  },
  {
    img: './img/wode2.png',
  },
  {
    img: './img/wode3.png',
  },
];
var fData = [
  {
    img: './img/wode4.png',
  },
  {
    img: './img/wode5.png',
  },
];
var banner = document.querySelector('#wd-banner'); /* 获取元素 */
for (let i = 0; i < data.length; i++) {
  let a = document.createElement('a'); /* 循环创建元素 */
  a.classList.add('swiper-slide'); /* 给元素添加属性 */
  a.href = '#'; /* 给元素添加属性 */
  a.innerHTML = `
  <img src="${data[i].img}" alt="">
  `;
  banner.appendChild(a);
}
var mySwiper = new Swiper('#wode-banner', {
  spaceBetween: 30,
  autoplay: true,
});
var footer = document.getElementById('footer');
console.log(footer);
for (let i = 0; i < fData.length; i++) {
  let a = document.createElement('a');
  a.href = '#'; /* 给元素添加属性 */
  a.innerHTML = `
  <img src="${fData[i].img}" alt="">`;
  footer.appendChild(a);
}
