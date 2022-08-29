# vuex

## vuex和直接在vue中使用全局变量的对比

Vue.prototype xxx上的数据是静态的,只能通过手动修改,修改后数据变了,但使用这些数据的组件并不会重新渲染,也必须得手动渲染。
Vue prototype xxx相当于是在Vue对象上增加全局属性,容易造成变量污染。

Vuex只要store中的数据更新,就会立即渲染所有使用store 数据的组件。Vuex 使用单向数据流,要想修改store 数据需要经过action层, mutation层,层次划分明确,便于管理。
