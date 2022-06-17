<template>
  <div class="container">
    <h2>山月不知心底事，水风空落眼前花</h2>
    <h3>很高兴认识你 <strong>怡宝</strong></h3>
    <h4>{{ date }}</h4>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const timer = ref(null)
let date = ref('')
const getDateDiff = (startTime, endTime) => {
  //将日期字符串转换为时间戳
  var sTime = new Date(startTime).getTime() //开始时间
  var eTime = new Date(endTime).getTime() //结束时间
  //作为除数的数字
  var divNumSecond = 1000
  var divNumMinute = 1000 * 60
  var divNumHour = 1000 * 3600
  var divNumDay = 1000 * 3600 * 24

  const day = parseInt((eTime - sTime) / parseInt(divNumDay))
  const hour = parseInt(((eTime - sTime) % parseInt(divNumDay)) / parseInt(divNumHour))
  const minute = parseInt(parseInt(((eTime - sTime) % parseInt(divNumDay)) % parseInt(divNumHour)) / parseInt(divNumMinute))
  const second = parseInt((parseInt(((eTime - sTime) % parseInt(divNumDay)) % parseInt(divNumHour)) % parseInt(divNumMinute)) / parseInt(divNumSecond))
  const str = day + '天' + hour + '小时' + minute + '分' + second + '秒'
  return str
}

timer.value = setInterval(() => {
  const now = +new Date()
  const before = new Date('2022-4-5').getTime()
  date.value = getDateDiff(before, now)
}, 1000)
</script>

<style lang="scss" scoped>
  .container{
    width:100vw;
    height:100vh;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
 
  }
</style>
