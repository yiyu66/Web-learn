class Scheduler {
    constructor() {
        this.queue = [] // 待执行
        this.doingList = []
        this.maxNum = 2
    }
    add(promiseCreator) {
        if (this.doingList.length < this.maxNum) {
            this.run(promiseCreator)
        } else {
            this.queue.push(promiseCreator)
        }
    }
    run(promiseCreator) {
        let len = this.doingList.push(promiseCreator)
        let index = len - 1 //记录这个任务的下标，方便后面删除
        promiseCreator().then(() => {
            this.doingList.splice(index, 1)
            // 如果有待执行任务,每次执行完一个任务就推一个新的任务
            if (this.queue.length > 0) {
                this.run(this.queue.shift())
            }
        })
    }
}

const scheduler = new Scheduler()
const addTask = (time, text) => {
    const promiseMaker = () => new Promise(resolve => {
        setTimeout(() => {
            console.log(text);
            resolve();
        }, time);
    });

    scheduler.add(promiseMaker);
};

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

  // 打印顺序是：2 3 1 4
