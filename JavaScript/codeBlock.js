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

















