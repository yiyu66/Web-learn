# react生命周期

![image](https://static.vue-js.com/66c999c0-d373-11eb-85f6-6fac77c0c9b3.png)

## 创建阶段

> `constructor`.`getDerivedStateFromProps`.`render`.`componentDidMount`

### constructor

实例过程中自动调用的方法，在方法内部通过super关键字获取来自父组件的props

在该方法中，通常的操作为初始化state状态或者在this上挂载方法

### getDerivedStateFromProps

该方法是新增的生命周期方法，是一个静态的方法，因此不能访问到组件的实例

执行时机：组件创建和更新阶段，不论是props变化还是state变化，也会调用

在每次render方法前调用，第一个参数为即将更新的props，第二个参数为上一个状态的state，可以比较props 和 state来加一些限制条件，防止无用的state更新

该方法需要返回一个新的对象作为新的state或者返回null表示state状态不需要更新

### render

类组件必须实现的方法，用于渲染DOM结构，可以访问组件state与prop属性

注意： 不要在 render 里面 setState, 否则会触发死循环导致内存崩溃

### componentDidMount

组件挂载到真实DOM节点后执行，其在render方法之后执行

此方法多用于执行一些数据获取，事件监听等操作

## 更新阶段

* getDerivedStateFromProps
* shouldComponentUpdate
* render
* getSnapshotBeforeUpdate
* componentDidUpdate

### shouldComponentUpdate

用于告知组件本身基于当前的props和state是否需要重新渲染组件，默认情况返回true

执行时机：到新的props或者state时都会调用，通过返回true或者false告知组件更新与否

一般情况，不建议在该周期方法中进行深层比较，会影响效率

同时也不能调用setState，否则会导致无限循环调用更新

### getSnapshotBeforeUpdate

该周期函数在render后执行，执行之时DOM元素还没有被更新

该方法返回的一个Snapshot值，作为componentDidUpdate第三个参数传入

```js
getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('#enter getSnapshotBeforeUpdate');
    return 'foo';
}

componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('#enter componentDidUpdate snapshot = ', snapshot);
}
```

此方法的目的在于获取组件更新前的一些信息，比如组件的滚动位置之类的，在组件更新后可以根据这些信息恢复一些UI视觉上的状态

### componentDidUpdate

执行时机：组件更新结束后触发

在该方法中，可以根据前后的props和state的变化做相应的操作，如获取数据，修改DOM样式等

## 卸载阶段

### componentWillUnmount

此方法用于组件卸载前，清理一些注册是监听事件，或者取消订阅的网络请求等

一旦一个组件实例被卸载，其不会被再次挂载，而只可能是被重新创建
