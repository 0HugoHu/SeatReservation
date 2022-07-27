
/* CopyRight 胡亚东 20190623*/
/*
  本界面为工具类（获取各种日期时间格式）
*/

  const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('-') 
}

const formatTime = date => {
  const hour = date.getHours()
  const minute = date.getMinutes()

  return [hour, minute].map(formatNumber).join(':')
}

const formatTime_plus1 = date => {
  const hour_p = date.getHours()+1
  const minute = date.getMinutes()

  return [hour_p, minute].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatMonth = date => {
  const month = date.getMonth() + 1

  return [month].map(formatNumber).join('')
}

const formatDay = date => {
  const day = date.getDate()

  return [day].map(formatNumber).join('')
}

const formatYear = date => {
  const year = date.getFullYear()

  return [year].map(formatNumber).join('')
}
module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  formatDay: formatDay,
  formatYear: formatYear,
  formatMonth: formatMonth,
  formatTime_plus1: formatTime_plus1,
}