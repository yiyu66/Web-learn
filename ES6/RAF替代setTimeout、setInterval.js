const RAF = {
    intervalTimer: null,
    timeoutTimer: null,
    setTimeout(cb, interval) { // 實現setTimeout功能
        let now = Date.now
        let stime = now()
        let etime = stime
        let loop = () => {
            this.timeoutTimer = requestAnimationFrame(loop)
            etime = now()
            if (etime - stime >= interval) {
                cb()
                cancelAnimationFrame(this.timeoutTimer)
            }
        }
        this.timeoutTimer = requestAnimationFrame(loop)
        return this.timeoutTimer
    },
    clearTimeout() {
        cancelAnimationFrame(this.timeoutTimer)
    },
    setInterval(cb, interval) { // 實現setInterval功能
        let now = Date.now
        let stime = now()
        let etime = stime
        let loop = () => {
            this.intervalTimer = requestAnimationFrame(loop)
            etime = now()
            if (etime - stime >= interval) {
                stime = now()
                etime = stime
                cb()
            }
        }
        this.intervalTimer = requestAnimationFrame(loop)
        return this.intervalTimer
    },
    clearInterval() {
        cancelAnimationFrame(this.intervalTimer)
    }
}


let count = 0
function a() {
    console.log(count)
    count++
}
RAF.setInterval(a, 1000)
