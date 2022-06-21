# TypeScript 的 class

## 面对对象

>面向对象（OOP）的三大特性：封装、继承、多态

* 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
* 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
* 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
定义类的关键字为 class，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：

## 字段

字段 ： 字段是类里面声明的变量。字段表示对象的有关数据。
构造函数： 类实例化时调用，可以为类的对象分配内存。
方法： 方法为对象要执行的操作
如下例子：

```ts
class Car {
    // 字段
    engine:string;

    // 构造函数
    constructor(engine:string) {
        this.engine = engine
    }

    // 方法
    disp():void {
        console.log("发动机为 :   "+this.engine)
    }
}
```

## 修饰符

公共 public：可以自由的访问类程序里定义的成员
私有 private：只能够在该类的内部进行访问
受保护 protect：除了在该类的内部可以访问，还可以在子类中仍然可以访问
只读修饰符readonly，只读属性必须在声明时或构造函数里被初始化

## 静态属性

这些属性存在于类本身上面而不是类的实例上，通过static进行定义，访问这些属性需要通过 类型.静态属性 的这种形式访问，如下所示：

```ts
class Square {
    static width = '100px'
}

console.log(Square.width) // 100px
```

## 抽象类

abstract 用于定义抽象类和其中的抽象方法。
首先，抽象类是不允许被实例化的：抽象类中的抽象方法必须被子类实现：

```ts
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

let a = new Animal('Jack');

// index.ts(9,11): error TS2511: Cannot create an instance of the abstract class 'Animal'.
```
