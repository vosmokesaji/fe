/**
 * JavaScript
 * 页面匀速滚动的方法
 * @param {number} number 滚动到的目标高度
 * @param {number} time 时长，单位毫秒，用来控制速度
 */
const ScrollTop = (number = 0, time) => {
    if (!time) {
        document.body.scrollTop = document.documentElement.scrollTop = number
        return number
    }
    const spacingTime = 15 // 设置循环的间隔时间  值越小消耗性能越高
    let spacingInex = time / spacingTime // 计算循环的次数
    let nowTop = document.body.scrollTop + document.documentElement.scrollTop // 获取当前滚动条位置
    let everTop = (number - nowTop) / spacingInex // 计算每次滑动的距离
    let scrollTimer = setInterval(() => {
        if (spacingInex > 0) {
            spacingInex--
            ScrollTop(nowTop += everTop)
        } else {
            clearInterval(scrollTimer) // 清除计时器
        }
    }, spacingTime)
}

// 例子：10 秒滚动到 scrolltop 为 5000 的位置
ScrollTop(5000, 10000);

/*******************************************************************************/

 //节流throttle代码：
function throttle(fn) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
        // 在函数开头判断标记是否为true，不为true则return 
        if (!canRun) return;
        // 立即设置为false
        canRun = false;
        // 将外部传入的函数的执行放在setTimeout中
        setTimeout(() => { 
        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
        // 当定时器没有执行的时候标记永远是false，在开头被return掉
            fn.apply(this, arguments);
            canRun = true;
        }, 500);
    };
}

// 例子
window.onscroll = this.throttle(this.onScroll);


/*******************************************************************************/

// 节流函数 时间戳版
function throttle(func, wait) {
    let previous = 0;
    return function() {
        let now = Date.now();
        let context = this;
        let args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}

// 节流函数 定时器版
function throttle(func, wait) {
    let timeout;
    return function() {
        let context = this;
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context, args);
            }, wait)
        }
    }
}











