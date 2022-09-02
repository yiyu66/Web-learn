# 面经

## 讲一下vue和react的diff算法，有什么区别

vue和react的diff算法都是优化过的diff算法,而且有着相同的优化点,就是同级比较,不做跨级比较。也就是说只比较同层的节点，不同层不做比较。不同层的只需要删除原节点，并且新建插入更新节点。

如果两个节点的key相同，那么就比较两个节点的值，如果值相同，那么就不做操作，如果值不相同，那么就更新节点的值。如果两个节点的key不相同，那么就删除原节点，并且新建插入更新节点。

1. vue的diff算法的原理
vue的diff算法是父子兄弟组件互不干扰
vue的diff算法的比较规则:新旧列表的两端对比
vue的diff算法的移动规则:不同情况的移动规则不同

2. react的diff算法
react的diff算法对父子兄弟组件的影响；当更新父组件state中的数据时,父组件以及子组件和所有的子孙组件都会被更新,这个可以通过shouldComponentUpdate来优化解决
react采用的是比较vue而言更加简洁的对比方式,就是同级遍历,拿着新节点列表的节点一个个与旧节点列表做遍历对比,当对比成功的时候,就把旧节点插入到真实dom中当前新节点位置对应的真实dom的前边,若是没有找到对应的,就要在新节点所对应的真实dom的地方插入一个节点
react的diff算法的弊端:当首位新节点与末尾老节点相对应的时候,就会导致多个节点进行移位,结果是相同的,但是中间的比较计算以及操作时不友好的

### 比较

1. vue和react的diff算法，都是忽略跨级比较，只做同级比较。vue diff时调动patch函数，参数是vnode和oldVnode，分别代表新旧节点。
2. vue对比节点。当节点元素相同，但是classname不同，认为是不同类型的元素，删除重建，而react认为是同类型节点，只是修改节点属性。
3. vue的列表对比，采用的是两端到中间比对的方式，而react采用的是从左到右依次对比的方式。当一个集合只是把最后一个节点移到了第一个，react会把前面的节点依次移动，而vue只会把最后一个节点移到第一个

## diff算法的key有什么作用，举例说明一下

Q:vue的diff算法的key有什么作用，举例说明一下
A:vue的diff算法的key有什么作用，举例说明一下

1. 当key相同的时候，就不用比较了，直接更新节点的值。
2. 当key不相同的时候，就要把原节点删除，并且新建插入更新节点。

## 使用index作为key可能会应发的问题?

如果对数据进行逆序添加、删除等破坏顺序操作，会产生没有必要的真实DOM更新，页面效果没有问题，但是效率低下。

## 本地化存储有哪些方式

参考/其他/前端存储.md

## 对hooks的理解

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性
在之前在组件之间复用状态逻辑很难
在函数式组件中使用 useEffect 取代了类组件声明周期的调用，使开发者不再额外关心声明周期的使用，而专注于数据变化的处理并映射成新的视图

缺点：
有一些生命周期hooks暂时无法替代

## 自己写过hooks吗？

<https://zhuanlan.zhihu.com/p/109911797>

## 讲一下usecallback和usememo

可以避免由于父组件状态变更导致不必要的子组件进行重新渲染。区别在于useMemo返回的是函数运行的结果，useCallback返回的是函数。返回的callback可以作为props回调函数传递给子组件。

useCallback 和 useMemo 的参数都是一个函数加一个依赖数组，依赖没有改变时直接返回内存中缓存的结果，无需重复计算。简单理解就是 useCallback 缓存事件处理函数，useMemo 缓存二次计算的结果

## 这两者结合起来怎么优化

useCallback是来优化子组件的，防止子组件的重复渲染。useMemo可以优化当前组件也可以优化子组件，优化当前组件主要是通过memoize来将一些复杂的计算逻辑进行缓存。当然如果只是进行一些简单的计算也没必要使用useMemo。
我们可以将useMemo的返回值定义为返回一个函数这样就可以变通的实现了useCallback。

## useEffect，如果第二个参数不填会怎么样

每次都会重新渲染

## 0.5px的线

方法一：tansform
        #line1 {
            border-bottom: 1px solid black;
            transform: scaleY(0.5);
        }
方法二：渐变
        #line2 {
            height: 1px;
            background: -webkit-linear-gradient(90deg, #000 50%, transparent 50%);
        }
方法三：initial-scale

        <meta name="viewport" content="width=device-width, initial-scale=0.5">

## 说一下CDN，说一下DNS

    CDN 又叫内容分发网络，通过把资源部署到世界各地，用户在访问时按照就近原则从离用户最近的服务器获取资源，从而加速资源的获取速度。 CDN 其实是通过优化物理链路层传输过程中的网速有限、丢包等问题来提升网速的

## 说一些DOM的操作方式，增删改查这些

1. 增
    document.createElement('div');
    document.body.appendChild(p);
    可以通过使用 appendChild()、insertBefore() 或 replaceChild() 方法实现，将新创建的元素添加到 head 或 body  中
2. 删
    let div = document.getElementById('div');
    div.parentNode.removeChild('div');    //改div元素依然存在内存中
    document.body.appendChild('div');    //依然可以将div再添加回来，可以将div赋值为null将其删除掉
3. 改
    setAttribute() 和 getAttribute() 方法可以设置和获取元素的指定属性，如果属性不存在，则返回 null
    //可以通过classList.add()方法添加class类型
    div.classList.add('red');
4. 查
    document.getElementById('div');
    可以通过 parentNode、childNodes、firstChild 等属性查看当前节点的相关节点：

## 如果我要在一个dom中插入100个div，如何优化

documentFragment是一个保存多个element的容器对象（保存在内存）当更新其中的一个或者多个element时，页面不会更新。只有当documentFragment容器中保存的所有element更新后再将其插入到页面中才能更新页面。
const fragment = document.createDocumentFragment()

## 写题

用react写一个模态框组件，传入两个参数text和delay
有个togel,show({ text:"asd",delay:1000}),延时delay后关闭
数组扁平化
