// 发布者将发布的消息分为不同的类别
// 订阅者可以订阅一个或多个类别
class eventbus {
    constructor() {
        this.bus = {}
    }
    // 注册事件监听者
    on(type, callback) {
        if (!this.bus[type]) this.bus[type] = []
        this.bus[type].push(callback)
    }
    // 发布事件
    emit(type, ...args) {
        if (this.bus[type]) {
            const handlers = [...this.bus[type]]
            handlers.forEach((cb) => {
                cb(...args)
            })
        }
    }
    //移除订阅，需要移除的订阅事件名及指定的回调函数
    off(type, callback) {
        const index = this.bus[type].indexOf(callback)
        if (index !== -1) {
            this.bus[type].splice(index, 1)
        }
    }
}
const ee = new eventbus()
ee.on('chifan', test)
ee.emit('chifan', '三食堂', '铁板饭')
ee.off('chifan', test)
ee.emit('chifan', '三食堂', '铁板饭')
function test(address, food) { console.log(`吃饭了，我们去${address}吃${food}`) }