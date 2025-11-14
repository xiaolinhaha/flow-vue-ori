/* Macarons 主题占位：注册基础配色，避免引入错误 */
/* eslint-disable */
var echarts = require('echarts')
if (echarts && echarts.registerTheme) {
  echarts.registerTheme('macarons', {
    color: ['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80','#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa','#07a2a4','#9a7fd1'],
  })
}