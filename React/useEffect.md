# useEffect

useEffect 是 React 提供的 Hook，它能够帮助我们定义 effect 函数。

第一个参数就是副作用函数 effect

第二个参数表示依赖项，是一个可选参数。当不传入该参数时，每次 UI 渲染 effect 函数都会执行。

但是大多数时候我们并不想任何 state 的变化都一定要执行 effect 函数，这个时候我们可以传入依赖项数组。使用时请确保依赖项数组中为 state/props 的值，表示 effect 只会响应依赖项中状态的变化。

> 如果你在 useEffect 中传入与 state 无关的数据，effect 不会响应它们

```js
function Demo() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    // do something
  }, [count])
  
  useEffect(() => {
    // do other something
  }, [show])
}
```

除此之外，我们还可以传入空数组作为依赖项，用于表示依赖项不会发生变化。因此，空数组对应的 effect，就只会在初始化时执行一次，以后就再也不会执行了。

我们通常利用这个特性完成一些初始化工作，例如请求页面数据

## 清除副作用

有的时候，副作用函数 effect 执行会留下一些痕迹，因此 useEffect 提供了一种清除副作用的方式。

effect 与 clear effect 是一一对应的紧密关系。因此，我们可以定义一个回调函数由 effect 执行时返回，该函数就是 clear effect 函数。

```js
useEffect(() => {
  // dosomething
  
  // 定义 clear effect 函数
  return () => {
    // clear something
  }
}, [])
```

**clear effect 在下次 effect 执行之前执行，也会在组件销毁之前执行一次。**

我们可以借助该特性实现一个防抖的案例

例如我们要实现一个搜索框的功能。文字输入过程中会自动发起搜索请求。为了防止请求发送过于频繁，在高频输入时，不发送接口请求，如果超过了 500ms 下一次输入事件还没有发生，那么就自动请求一次。

实现代码如下

```JS
import { useEffect, useState } from 'react'

export default function EffectDemo() {
  const [text, setText] = useState('')
  useEffect(() => {
    let timer =  setTimeout(() => {
      console.log('发送搜索请求')
    }, 500)
    return () => {
      console.log('清除定时器')
      clearTimeout(timer)
    }
  }, [text])

  return (
    <div>
      <input type="text" placeholder='请输入内容...' onChange={(e) => setText(e.target.value)} />
    </div>
  )
}
```

我们在 effect 中定义了定时器，作为延迟操作：500ms 后执行请求逻辑。如果下一次 text 快速发生变化，clear effect 执行会清除掉上一次定义的定时器任务，那么请求逻辑就不会执行。

只有下一次 text 的改变超过了 500ms 时，定时器任务才会如期执行。
