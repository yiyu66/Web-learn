# vuex

<https://zhuanlan.zhihu.com/p/78981485>

## vuex和直接在vue中使用全局变量的对比

Vue.prototype xxx上的数据是静态的,只能通过手动修改,修改后数据变了,但使用这些数据的组件并不会重新渲染,也必须得手动渲染。
Vue prototype xxx相当于是在Vue对象上增加全局属性,容易造成变量污染。

Vuex只要store中的数据更新,就会立即渲染所有使用store 数据的组件。Vuex 使用单向数据流,要想修改store 数据需要经过action层, mutation层,层次划分明确,便于管理。

## 原理

vuex是利用vue的mixin混入机制，在beforeCreate钩子前混入vuexInit方法，vuexInit方法实现了store注入vue组件实例，并注册了vuex store的引用属性$store。store注入过程如下图所示：
![vuex原理](https://pic4.zhimg.com/80/v2-a8b969f8771a1fc13b7cedfdfe86f0e7_1440w.jpg)

## vuex的state和getters是如何映射到各个组件实例中响应式更新状态呢？

我们可以看出Vuex的state状态是响应式，是借助vue的data是响应式，将state存入vue实例组件的data中；Vuex的getters则是借助vue的计算属性computed实现数据实时监听。
