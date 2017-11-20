const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const shallowCopy = obj => {
  var copy;
  if (obj) {
    copy = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = obj[key];
      }
    }
  }
  return copy;
}

const shallowMerge = (dstObj, srcObj) => {
  if (srcObj && dstObj) {
    for (let key in srcObj) {
      if (srcObj.hasOwnProperty(key)) {
        dstObj[key] = srcObj[key];
      }
    }
  }
}

module.exports = {
  formatTime: formatTime,
  shallowCopy: shallowCopy,
  shallowMerge: shallowMerge 
}
