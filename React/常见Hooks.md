# 常见Hooks理解

useCallBack
一个缓存的回调函数
参数:需要缓存的函数，依赖项
父组件更新时，通过props传递给子组件的函数也会重新创建，然后这个时候使用 useCallBack 就可以缓存函数不使它重新创建
useMemo
一个缓存的值
参数:需要缓存的值(也可以是个计算然后再返回值的函数) ，依赖项
组件更新时，一些计算量很大的值也有可能被重新计算，这个时候就可以使用 useMemo 直接使用上一次缓存的值

## useState

useState是一个函数，返回一个数组，数组的第一个元素是当前的state，第二个元素是一个函数，用于更新state。

```jsx  
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## useEffect

useEffect是一个函数，它接收一个函数作为参数，这个函数会在组件的每次渲染之后执行。

```jsx
import React, { useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## useContext

useContext是一个函数，它接收一个context对象作为参数，这个对象包含了当前组件所需要的context数据。

创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。
。

```jsx
import React, { useContext } from 'react';

const CountContext = React.createContext();

function Counter() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}
```

## useReducer

useReducer是一个函数，它接收两个参数，第一个参数是reducer函数，第二个参数是初始state。

```jsx
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error();
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
    </div>
  );
}
```

## useMemo

useMemo是一个函数，它接收一个函数作为参数，这个函数会在组件的每次渲染之后执行。

```jsx

import React, { useMemo } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const memoizedName = useMemo(() => name, [name]);
  return (
    <div>
      <p>{memoizedName}</p>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## useCallback

useCallback是一个函数，它接收一个函数作为参数，这个函数会在组件的每次渲染之后执行。

```jsx
import React, { useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const memoizedCallback = useCallback(() => {
    console.log('Callback');
  }, [name]);
  return (
    <div>
      <p>{name}</p>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## useRef

useRef是一个函数，它接收一个参数，这个参数是一个对象，这个对象的属性是一个变量，这个变量的值是初始值。

```jsx
import React, { useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const memoizedCallback = useCallback(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <p>{count}</p>
      <input type="text" ref={inputRef} />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={memoizedCallback}>
        Focus input
      </button>
    </div>
  );
}
```

## useImperativeHandle

useImperativeHandle是一个函数，它接收两个参数，第一个参数是一个函数，第二个参数是一个对象，这个对象的属性是一个函数，这个函数会在组件的每次渲染之后执行。

```jsx
import React, { useImperativeHandle } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const memoizedCallback = useCallback(() => {
    inputRef.current.focus();
  } , []);
  useImperativeHandle(memoizedCallback, () => {
    return {
      focus: () => inputRef.current.focus()
    };
  } );
  return (
    <div>
      <p>{count}</p>
      <input type="text" ref={inputRef} />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={memoizedCallback}>
        Focus input
      </button>
    </div>
  );
}
```

## useLayoutEffect

useLayoutEffect是一个函数，它接收一个函数作为参数，这个函数会在组件渲染之后执行。

```jsx
import React, { useLayoutEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log('Layout effect');
  } , []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## useDebugValue

useDebugValue是一个函数，它接收一个参数，这个参数是一个函数，这个函数会在组件渲染之后执行。

```jsx
import React, { useDebugValue } from 'react';   

function Counter() {
  const [count, setCount] = useState(0);
  useDebugValue(count);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
