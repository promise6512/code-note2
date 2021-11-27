function move(obj, attr, speed, final, callback) {
    /* 
       参数:
           1.obj 对象名
           2.attr 样式名
           3.speed 速度
           4.final 最终样式值
           5.callback 回调函数
    */
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj, attr));
    if (current > final) {
        speed = -speed;
    }
    obj.timer = setInterval(function () {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        if ((newValue >= final && speed > 0) || (newValue <= final && speed < 0)) {
            clearInterval(obj.timer);
            obj.style[attr] = final + 'px';
            callback && callback()
        } else {
            obj.style[attr] = newValue + 'px';
        }

        /*  if(newValue >= 800){
             clearInterval(timer);
         } */
    }, 100)
}
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
}

/* 定义函数 用来向一个元素中添加指定的class属性值 */
function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += ' ' + cn;
    };
}

/*
  判断元素中是否含有指定的class属性值 
      如果有 则返回true
      否则   返回false
*/
function hasClass(obj, cn) {
    var reg = new RegExp('\\b' + cn + '\\b');
    return reg.test(obj.className)
}

/* 
    定义一个函数 删除一个类名 并返回结果
 */
function removeClass(obj, cn) {
    var reg = new RegExp('\\b' + cn + '\\b');
    return obj.className.replace(reg, ' ');
}

/* 
    toggleClass用来切换一个类
        如果元素中有该类 则删除
        如果元素中没有该类 则添加
*/
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        obj.className = removeClass(obj, cn);
        //alert(1)
    } else {
        addClass(obj, cn)
    }
}