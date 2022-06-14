# TypeScript函数

```ts
// 可选参数
function createUserId(name: string, id: number, age?: number): string {
  return name + id;
}
//在声明函数时，可以通过 ? 号来定义可选参数，比如 age?: number 这种形式。在实际使用时，需要注意的是可选参数要放在普通参数的后面，不然会导致编译错误。

// 默认参数
function createUserId(
  name: string = "Semlinker",
  id: number,
  age?: number
): string {
  return name + id;
}

//剩余参数
function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);
```

## 函数重载

函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。这里需要注意的是，当 TypeScript 编译器处理函数重载时，它会查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
```
