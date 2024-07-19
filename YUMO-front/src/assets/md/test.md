# Proxy 对象

## 描述

> **Proxy** 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

## 语法

```js
const proxy = new Proxy(target, handler);
```

参数：

- `target`: 要使用`Proxy`对象包装的目标对象。
- `handler`：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 `p` 的行为。

方法：

- `Proxy.revocable()`：创建一个可撤销的`Proxy`对象

## handler 对象常用方法

|       方法       |                                     描述                                      |
| :--------------: | :---------------------------------------------------------------------------: |
|      has()       |                               in 操作符的捕捉器                               |
|      get()       |                                   属性读取                                    |
|      set()       |                                   属性设置                                    |
| deleteProperty() |                             delete 操作符的捕捉器                             |
|     ownKey()     | Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器。 |
|     apply()      |                             函数调用操作的捕捉器                              |
|    construct     |                              new 操作符的捕捉器                               |

## 方法详解

### get

参数：

- `target`目标对象
- `propkey`属性名
- `receiver Proxy`实例本身

举例：

```js
const person = {
  like: "vuejs",
};

const obj = new Proxy(person, {
  get: function (target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError('Prop name "' + propKey + '" does not exist.');
    }
  },
});

obj.like; // vuejs
obj.test; // Uncaught ReferenceError: Prop name "test" does not exist.
```

案例：通过 get 方法实现链式操作

```js
// 实现链式调用
const pipe = (value) => {
  const funcStack = [];
  const proxy = new Proxy(
    {},
    {
      get: function (target, fnName) {
        if (fnName === "get") {
          return funcStack.reduce(function (val, fn) {
            return fn(val);
          }, value);
        }
        funcStack.push(eval(fnName));
        return proxy;
      },
    }
  );

  return proxy;
};

let double = (n) => n * 2;
let pow = (n) => n * n;
let reverseInt = (n) => n.toString().split("").reverse().join("");
console.log(pipe(3).double.pow.reverseInt.get); // 63
```

⚠️ 注意：

- 如果要访问的目标属性是不可写以及不可配置的，则返回的值必须与该目标属性的值相同
- 如果要访问的目标属性没有配置访问方法，即 get 方法是 undefined 的，则返回值必须为 undefined

```js
const obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: false,
  value: 10,
  writable: false,
});

const p = new Proxy(obj, {
  get: function (target, prop) {
    return 20;
  },
});

p.a; // Uncaught TypeError: 'get' on proxy: property 'a' is a read-only and non-configurable..
```

### apply

`apply`方法可以拦截函数的调用、`call`和`apply`操作

方法接受三个参数：

- 目标对象
- 目标对象的上下文对象
- 目标对象的参数数组

示例：

```js
// apply
const handle = {
  apply(target, ctx, arg) {
    console.log(target);
    console.log(ctx);
    console.log(arg);
    return target(...arg) * 3;
  },
};

function sum(a, b) {
  return a + b;
}

const proxy = new Proxy(sum, handle);
console.log(proxy(1, 2)); // 9
```

### has

用来判断对象是否具有某个属性时,拦截`HasProperty`操作，例如`in`

接受两个参数：

- 目标对象
- 需查询的属性名

示例：隐藏某些属性，不被`in`运算符发现

```js
// has
const handlerHas = {
  has(target, key) {
    if (key === "password" || key[0] === "_") {
      return false;
    }
    return key in target;
  },
};

const hasObj = {
  name: "admin",
  _age: 18,
  password: "123",
};

const hasProxy = new Proxy(hasObj, handlerHas);
console.log(
  "test hasProxy: ",
  "name" in hasProxy,
  "_age" in hasProxy,
  "password" in hasProxy
); // true false false
```

⚠️ 注意：

1. ` has`对`for...in`不生效
2. 拦截的是`HasProperty`操作，而不是`HasOwnProperty`

### construct

用于拦截`new`命令。

参数：

- 目标对象
- 构造函数的参数数组
- 创建实例对象时，`new`命令作用的构造函数，下例中的`p()`

```js
// construct
const handlerCounstruct = {
  a: 111,
  construct(target, args, newtarget) {
    console.log("this:", this === handlerCounstruct, this);
    newtarget();
    return { value: 111 };
  },
};

const proxy = new Proxy(function (a) {
  console.log(a);
  return a;
}, handlerCounstruct);
const p = new proxy(222);
console.log(p);
```

⚠️ 注意：

- `construct`拦截的目标必须是一个函数，而且返回值必须为对象。
- 不使用箭头函数的时候，`construct`函数内部的`this`指向`handler`

### deleteProperty

用于拦截`delete`操作

示例：

```js
// delete
const handler = {
  deleteProperty(target, key) {
    if (key[0] === "_") {
      console.warn(`禁止删除 ${key} 属性`);
      return false;
    }
    delete target[key];
    return true;
  },
};

const obj = new Proxy({}, handler);
obj._name = "ju";
delete obj._name; // 禁止删除 _name 属性
obj.value = 123;
console.log(obj); // { _name: 'ju', value: 123 }
delete obj.value;
console.log(obj); // { _name: 'ju' }
```

### defineProperty

拦截`Object.defineProperty`操作

```js
var handler = {
  defineProperty(target, key, descriptor) {
    return false;
  },
};
var target = {};
var proxy = new Proxy(target, handler);
proxy.foo = "bar"; // 不会生效
```

`defineProperty()`方法内部没有任何操作，只返回`false`，导致添加新属性总是无效。注意，这里的`false`只是用来提示操作失败，本身并不能阻止添加新属性。

注意，如果目标对象不可扩展（`non-extensible`），则`defineProperty()`不能增加目标对象上不存在的属性，否则会报错。另外，如果目标对象的某个属性不可写（`writable`）或不可配置（`configurable`），则`defineProperty()`方法不得改变这两个设置。

## 可撤销的 Proxy

`Proxy.revocable(target, handler)`

该方法的返回值是一个对象，结构为：

```js
{
  "proxy": proxy,
  "revoke": revoke
}
```

- proxy 表示新生成的代理对象本身，和用一般方式 new Proxy(target, handler) 创建的代理对象没什么不同，只是它可以被撤销掉。
- revoke 撤销方法，调用的时候不需要加任何参数，就可以撤销掉和它一起生成的那个代理对象。

该方法常用于完全封闭对目标对象的访问，如下示例：

```js
const target = { name: "vuejs" };
const { proxy, revoke } = Proxy.revocable(target, handler);
proxy.name; // 正常取值输出 vuejs
revoke(); // 取值完成对proxy进行封闭，撤消代理
proxy.name; // TypeError: Revoked
```
