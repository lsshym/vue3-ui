添加了async标记的函数本身会变成一个Promise函数,
本身变成异步，不会阻挡接下来的程序执行，但async会先执行一遍

添加await标记分两种情况，普通函数和Promise函数
await后接普通函数，好像跟平时没什么区别
如果是Promise,那没有结果不会继续执行await下面的方法

```
let foo = await getFoo();
let bar = await getBar();
```
可以写成
```
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
```