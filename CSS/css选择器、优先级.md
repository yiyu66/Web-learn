# css选择器、优先级

## 选择器

* id选择器（#box），选择id为box的元素

* 类选择器（.one），选择类名为one的所有元素

* 标签选择器（div），选择标签为div的所有元素

* 后代选择器（#box div），选择id为box元素内部所有的div元素

* 子选择器（.one>one_1），选择父元素为.one的所有.one_1的元素

* 相邻同胞选择器（.one+.two），选择紧接在.one之后的所有.two元素

* 群组选择器（div,p），选择div、p的所有元素

* 伪类选择器

```css
:link ：选择未被访问的链接
:visited：选取已被访问的链接
:active：选择活动链接
:hover ：鼠标指针浮动在上面的元素
:focus ：选择具有焦点的
:first-child：父元素的首个子元素
```

* 伪元素选择器

```css
:first-letter ：用于选取指定选择器的首字母
:first-line ：选取指定选择器的首行
:before : 选择器在被选元素的内容前面插入内容
:after : 选择器在被选元素的内容后面插入内容
```

* 属性选择器

```css
[attribute] 选择带有attribute属性的元素
[attribute=value] 选择所有使用attribute=value的元素
[attribute~=value] 选择attribute属性包含value的元素
[attribute|=value]：选择attribute属性以value开头的元素
```

在**CSS3**中新增的选择器有如下：

* 层次选择器（p~ul），选择前面有p元素的每个ul元素
* 伪类选择器

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

* 属性选择器

```css
[attribute*=value]：选择attribute属性值包含value的所有元素
[attribute^=value]：选择attribute属性开头为value的所有元素
[attribute$=value]：选择attribute属性结尾为value的所有元素
```

## 优先级

> 内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器

如果外部样式需要覆盖内联样式，就需要使用!important

## 继承属性

### 能继承的

字体系列属性

文本系列属性

元素可见性

表格布局属性

列表属性

引用
quotes：设置嵌套引用的引号类型
光标属性
cursor：箭头可以变成需要的形状
> 继承中比较特殊的几点：
a 标签的字体颜色不能被继承
h1-h6标签字体的大下也是不能被继承的

### 无继承属性

display

文本属性：vertical-align、text-decoration

盒子模型的属性：宽度、高度、内外边距、边框等

背景属性：背景图片、颜色、位置等

定位属性：浮动、清除浮动、定位position等

生成内容属性：content、counter-reset、counter-increment

轮廓样式属性：outline-style、outline-width、outline-color、outline

页面样式属性：size、page-break-before、page-break-after
