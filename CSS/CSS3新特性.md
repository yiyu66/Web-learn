# CSS3新特性？

> flex弹性布局，grid栅格布局，选择器，新样式，transition过渡，transform转化，animation，渐变

## flex弹性布局，grid栅格布局

## 选择器

1. 层次选择器（p~ul），选择前面有p元素的每个ul元素
2. 伪类选择器

    ```css
    :first-of-type 表示一组同级元素中其类型的第一个元素
    :last-of-type 表示一组同级元素中其类型的最后一个元素
    :only-of-type 表示没有同类型兄弟元素的元素
    :only-child 表示没有任何兄弟的元素
    :nth-child(n) 根据元素在一组同级中的位置匹配元素
    :nth-last-of-type(n) 匹配给定类型的元素，基于它们在一组兄弟元素中的位置，从末尾开始计数
    :last-child 表示一组兄弟元素中的最后一个元素
    :root 设置HTML文档
    :empty 指定空的元素
    :enabled 选择可用元素
    :disabled 选择被禁用元素
    :checked 选择选中的元素
    :not(selector) 选择与 <selector> 不匹配的所有元素
    ```

3. 属性选择器

    ```css
    [attribute*=value]：选择attribute属性值包含value的所有元素
    [attribute^=value]：选择attribute属性开头为value的所有元素
    [attribute$=value]：选择attribute属性结尾为value的所有元素
    ```

## 新样式

   1. **边框**（圆角，阴影，图片边框）：border-radius;box-shadow;border-iamge
   2. **背景**：Background-clip:确定背景画区；background-size；background-origin
   3. **文字**：`word-wrap: normal|break-word`,`text-overflow`,`text-shadow`,`text-decoration`
   4. **颜色**：rgba，hsla a为透明度

## transition 过渡

`transition： CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0)
`
也可以分开写

```css
transition-property: width; 
transition-duration: 1s;
transition-timing-function: linear;
transition-delay: 2s;
```

## transform 转换

transform属性允许你旋转，缩放，倾斜或平移给定元素

transform-origin：转换元素的位置（围绕那个点进行转换），默认值为(x,y,z):(50%,50%,0)

```css
transform: translate(120px, 50%)：位移
transform: scale(2, 0.5)：缩放
transform: rotate(0.5turn)：旋转
transform: skew(30deg, 20deg)：倾斜
```

## animation 动画

比如20秒旋转一圈

```css
animation: rotateName 20s infinite linear;
// 关键帧动画
@keyframes rotateName {
  from {

  }
  to {
    transform: rotate(1turn);
  }
}
```

## 渐变

颜色渐变linear-gradient，radial-gradient
