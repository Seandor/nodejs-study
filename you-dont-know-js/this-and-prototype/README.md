# this & prototype

这里主要记录的书中在this & prototype这一章中用到的例子，以及摘选的书中具有深刻意义的语句，还有自己对该方面知识的理解。

### this

`this`是一个很特别的关键字，它被自动定义在所有的函数作用域中。

**误解**:

- `this`指向函数自身
- `this`指向函数的词法作用域

> `this` 在任何情况下都不指向函数的词法作用域。在 JavaScript 内部， 作用
> 域确实和对象类似， 可见的标识符都是它的属性。 但是作用域“ 对象” 无法通过 JavaScript
> 代码访问， 它存在于 JavaScript 引擎内部。

### What is `this`?
每个函数的 this 是在调用时被绑定的， 完全取决于函数的调用位置。

绑定规则：
- 默认绑定
- 隐式绑定
- 显示绑定
- new 绑定

优先级：
显示绑定 > 隐式绑定
new 绑定 > 隐式绑定

### 判断this

1. 函数是否在 new 中调用（ new 绑定） ？ 如果是的话 this 绑定的是新创建的对象。
```var bar = new foo()```
2. 函数是否通过 call、 apply（ 显式绑定） 或者硬绑定调用？ 如果是的话， this 绑定的是
指定的对象。
```var bar = foo.call(obj2)```
3. 函数是否在某个上下文对象中调用（ 隐式绑定） ？ 如果是的话， this 绑定的是那个上
下文对象。
```var bar = obj1.foo()```
4. 如果都不是的话， 使用默认绑定。 如果在严格模式下， 就绑定到 undefined， 否则绑定到
全局对象。
```var bar = foo()```

### 对象
常见的内置对象有：

- String
- Number
- Boolean
- Object
- Function
- Array
- Date
- RegExp
- Error

在对象中，属性名永远都是字符串。

How to ensure that my object is JSON safe?

### 类理论

“Class/Inheritance” describes a certain form of code organization and architecture -- a way of modeling real world problem domains in our software.

类只是一种设计模式。

类是一张蓝图。

### prototype
