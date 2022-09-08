# Redux

## 流程

通过 dispatch(action) -> 中间件 -> reducer处理数据 -> 改变store -> 使用subscribe()监听store改变更新视图 的方式管理状态

将所有状态存储在一个store对象里面

reducer为纯函数，而异步操作由于结果的不确定性所以含有副作用，所以需要特殊处理

![异步数据流](https://img-blog.csdnimg.cn/img_convert/ec13982d93afb18135f715751161f306.gif)

## 三大原则

单一数据源，整个应用的state被储存在一棵object tree中，并且这个object tree只存在于唯一一个store中

State是只读的，唯一改变state的方法就是触发action，action是一个用于描述已发生事件的普通对象

使用纯函数来执行修改，为了描述action如何改变state tree，你需要编写reducers

## 三大概念

### Action

Action是把数据从应用传到store的有效载荷，它是store数据的唯一来源，一般来说你会通过store.dispatch()将action传到store

```js
{
  type: 'ADD_TODO',
  text: 'Build my first Redux app'
}
```

### Reducer

Action只是描述了有事情发生了这一事实，并没有指明应用如何更新state，这就是reducer的作用，reducer是一个纯函数，接收先前的state和action，返回新的state

```js
(state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
```

### Store

Store是把action和reducer联系到一起的对象，store有以下职责：

维持应用的state

提供getState()方法获取state

提供dispatch(action)方法更新state

通过subscribe(listener)注册监听器

通过subscribe(listener)返回的函数注销监听器

## Redux的使用

### 安装

```bash
npm install --save redux
```

### 创建store

```js

import { createStore } from 'redux'

const store = createStore(reducer)

```

### 创建reducer

```js

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

```

### 创建action

```js

const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

```

### 使用

```js

store.subscribe(() => console.log(store.getState()))

store.dispatch(increment())

store.dispatch(decrement())

```

## 中间件

>Redux 中间件用来处理 状态 更新，也就是在 状态 更新的过程中，执行一系列的相应操作

### redux-logger中间件

目标：能够使用redux-logger中间件记录日志

安装：yarn add redux-logger
导入 redux-logger 中间件
从 redux 中导入 applyMiddleware 函数
调用 applyMiddleware() 并传入 logger 中间件作为参数
将 applyMiddleware() 调用作为 createStore 函数的第二个参数

```js
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(logger))
```

### redux-thunk中间件

目标：能够使用redux-thunk中间件处理异步操作

内容：

redux-thunk 中间件可以处理函数形式的 action。因此，在函数形式的 action 中就可以执行异步操作
>不使用 redux-thunk 中间件，action 只能是一个对象
使用 redux-thunk 中间件后，action 既可以是对象，又可以是函数

语法：

thunk action 是一个函数
函数包含两个参数：1 dispatch 2 getState

```js
// 函数形式的 action
const thunkAction = () => {
  return (dispatch, getState) => {}
}
 
// 解释：
const thunkAction = () => {
  // 注意：此处返回的是一个函数，返回的函数有两个参数：
  // 第一个参数：dispatch 函数，用来分发 action
  // 第二个参数：getState 函数，用来获取 redux 状态
  return (dispatch, getState) => {
    setTimeout(() => {
      // 执行异步操作
      // 在异步操作成功后，可以继续分发对象形式的 action 来更新状态
    }, 1000)
  }
}
```
