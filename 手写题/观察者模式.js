class Subject { // 被观察者 
    constructor() {
        this.observerList = []
    }
    addObserver(observer) {
        this.observerList.push(observer)
    }
    removeObserver(observer) {
        this.observerList.splice(this.observerList.indexOf(observer), 1)
    }
    notifyObservers(message) {
        this.observerList.forEach((item) => { item.notify(message) })
    }
}

class Observer {
    constructor(name, subject) {
        this.name = name
        if (subject) {
            subject.addObserver(this)
        }
    }
    notify(message) {
        console.log(this.name, 'got message', message);
    }
}

const subject = new Subject();
const observerA = new Observer('observerA', subject);
const observerB = new Observer('observerB');

subject.addObserver(observerB);
subject.notifyObservers('Hello from subject');
subject.removeObserver(observerA);
subject.notifyObservers('Hello again');