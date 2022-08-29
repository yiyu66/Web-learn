# watch && computed

## computed

computed是计算属性，用来计算一个属性的值。

调用的时候不需要加括号，可以直接当属性来用
根据依赖自动缓存，依赖不变的时候，值不会重新计算

computed的getter和setter

computed的属性可以读取和设值。因此，在computed中可以分为getter(读取)和setter(设值).
一般情况下没有setter，computed只预设了getter，只能读取，不能设值。所以，computed默认格式（是不表明getter函数的）.
当赋值给计算属性的时候，将调用setter函数。

## watch

watch的意思是监听，当发生变化时，监听并且执行。

immediat：ture表示让值最初时候watch就执行
deep表示对对象里面的变化进行深度监听
不支持缓存，数据变，直接会触发相应的操作

如果一个值依赖多个属性（多对一），用computed肯定是更加方便的。如果一个值变化后会引起一系列操作，或者一个值变化会引起一系列值的变化（一对多），用watch更加方便一些。
watch 支持异步代码而 computed 不支持。
