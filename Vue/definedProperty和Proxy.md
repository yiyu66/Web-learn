# definedProperty和Proxy

## Object.definedProperty的缺陷

* 无法监听到对象属性的动态添加和删除，所以vue2.0中提供给了我们 `$get $set $delete`这些方法用来弥补不足

* 无法监听到数组下标和length长度的变化。
`vm.items[indexOfItem]=newValue`这种是无法检测的。但是push之类的是可以检测
可以用set：`Vue.set(app.myArray,index,newVal);`

* 必须深层遍历嵌套的对象
如果是很大的数据嵌套规模，耗时耗内存

## proxy

它在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

Proxy有多达13种拦截方法,不限于apply、ownKeys、deleteProperty、has等等，是Object.defineProperty不具备的。

Proxy返回的是一个新对象,我们可以只操作新的对象达到目的,而Object.defineProperty只能遍历对象属性直接修改。

Proxy作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利。
