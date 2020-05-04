function animate(obj, distance, callback) {
  //设置定时器之前先关掉定时器,防止造成加速效果
  clearInterval(obj.timer)
  //给定时器命名为obj.timer,不用再开辟变量空间而且每个对象有唯一对应的一个定时器
  obj.timer = setInterval(() => {
    var step = (distance - obj.offsetLeft)/10
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    // obj.offsetLeft == distance && clearInterval(obj.timer)
    if(obj.offsetLeft == distance) {
      clearInterval(obj.timer)
      // 有回调函数的话就执行回调函数
      callback && callback()
    }
    obj.style.left = obj.offsetLeft + step + 'px'
  }, 15 );
}