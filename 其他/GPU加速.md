# 渲染

浏览器在获取 render tree后，渲染树中包含了大量的渲染元素，每一个渲染元素会被分到一个图层中，每个图层又会被加载到 GPU 形成渲染纹理。GPU 中 transform 是不会触发 repaint 的，这一点非常类似 3D 绘图功能，最终这些使用 transform 的图层都会由独立的合成器进程进行处理。

过程如下：

render tree -> 渲染元素 -> 图层 -> GPU 渲染 -> 浏览器复合图层 -> 生成最终的屏幕图像。

> 在 GPU 渲染的过程中，一些元素会因为符合了某些规则，而被提升为独立的层（黄色边框部分），一旦独立出来，就不会影响其它 DOM 的布局，所以我们可以利用这些规则，将经常变换的 DOM 主动提升到独立的层，那么在浏览器的一帧运行中，就可以减少 Layout 和 Paint 的时间了。

## 创建独立图层

哪些规则能让浏览器主动帮我们创建独立的层呢？

3D 或者透视变换（perspective，transform） 的 CSS 属性。
使用加速视频解码的 video 元素。
拥有 3D（WebGL） 上下文或者加速 2D 上下文的 canvas 元素。
混合插件（Flash)。
对自己的 opacity 做 CSS 动画或使用一个动画 webkit 变换的元素。
拥有加速 CSS 过滤器的元素。
元素有一个包含复合层的后代节点(换句话说，就是一个元素拥有一个子元素，该子元素在自己的层里)。
元素有一个兄弟元素在复合图层渲染，并且该兄弟元素的 z-index 较小，那这个元素也会被应用到复合图层。

## 为什么要创建独立图层

创建独立图层的目的是为了减少 Layout 和 Paint 的时间，因为这两个过程是非常耗时的，所以我们可以通过创建独立图层来减少这两个过程的时间。

## 如何创建独立图层

我们可以通过 CSS3 的 transform 属性来创建独立图层，但是这个属性是有一定的限制的，比如：

transform: translateZ(0) 会创建一个新的图层，但是 transform: translateZ(0px) 则不会创建新的图层。

## 开启 GPU 加速

CSS 中的以下几个属性能触发硬件加速：

transform
opacity
filter
will-change
如果有一些元素不需要用到上述属性，但是需要触发硬件加速效果，可以使用一些小技巧来诱导浏览器开启硬件加速。

.element {
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    /**或者**/
    transform: rotateZ(360deg);
    transform: translate3d(0, 0, 0);
}
