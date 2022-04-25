# flex

<https://www.runoob.com/w3cnote/flex-grammar.html>

## 概念

采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。
![image](https://www.runoob.com/wp-content/uploads/2015/07/3791e575c48b3698be6a94ae1dbff79d.png)
容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

## 容器的属性

以下6个属性设置在容器上。

`flex-direction`属性决定主轴的方向（即项目的排列方向）。
`flex-wrap`属性定义，如果一条轴线排不下，如何换行。
`flex-flow`属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
`justify-content`属性定义了项目在主轴上的对齐方式。
`align-items`属性定义项目在交叉轴上如何对齐。
`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box{
    flex-direction: row | row-reverse | column | column-reverse;
    flex-wrap: nowrap | wrap | wrap-reverse;
    flex-flow: <flex-direction> <flex-wrap>;
    justify-content: flex-start | flex-end | center | space-between | space-around;
    align-items: flex-start | flex-end | center | baseline | stretch;
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;

}
```

## 项目的属性

以下6个属性设置在项目上。

`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
`flex-grow`属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
`flex`flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

```css
.item{
    order: <integer>;
    flex-grow: <number>; /* default 0 */
    flex-shrink: <number>; /* default 1 */
    flex-basis: <length> | auto; /* default auto */
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ];
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
单值语法   等同于                备注
flex:   initial flex: 0 1 auto  初始值，常用
flex:   0 flex: 0 1 0%          适用场景少
flex:   none flex: 0 0 auto     推荐
flex:   1 flex: 1 1 0%          推荐
flex:   auto flex: 1 1 auto     适用场景少
```
