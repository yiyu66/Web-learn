# TS基本类型

1. Boolean类型
2. Number类型
3. String类型
4. Array类型
5. Tuple类型
    在单个变量中存储不同类型的值

    ```ts
    let tupleType: [string, boolean];
    tupleType = ["Semlinker", true];
    ```

6. Enum类型
    枚举就是一个对象的所有可能取值的集合，它的值是枚举的每个成员的名字，而不是数字。
7. Any类型
8. Unknown类型
    unknown 类型只能被赋值给 any 类型和 unknown 类型本身
9. Void类型
    void 类型只能被赋值给 undefined 和 null
10. Undefined类型和Null类型
    默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。然而，如果你指定了--strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自的类型。

11. Never类型
    never 类型表示的是那些永不存在的值的类型。 例如，never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。

    ```ts
    // 返回never的函数必须存在无法达到的终点
    function error(message: string): never {
    throw new Error(message);
    }

    function infiniteLoop(): never {
    while (true) {}
    }
    ```

12. Object类型
13. Type类型
14. Symbol类型
