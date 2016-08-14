# Async & Performance

这里主要记录的书中在Async & Performance这一章中用到的例子，以及自己对该方面知识的理解。

`console.log()` 有可能被浏览器处理成异步执行的。

直至最近的ES6之前，除了明确允许异步的JS代码（如超时函数），JS本身完全没有异步的概念。JS引擎一直都是单线程执行的。

### Event Loop

一个无限的循环作用在一个由事件组成的队列上，每次循环被称为一次“tick”，对于每个tick，如果事件队列不是空的，那么就会弹出一个事件并执行它（你写的回调函数）。

值得注意的是`setTimeout(..)`并没有将你的回调函数放入事件循环队列中，它设置了一个计时器，当计时器时间耗尽，外部环境(浏览器或Nodejs等)将你的回调函数放入事件循环。这样，未来的某个tick就会拾取该事件并执行它。

这样也就解释了为什么`setTimeout(..)`并没有那么精确。

### Parallel Threading

It's very common to conflate the terms "async" and "parallel," but they are actually quite different. Remember, async is about the gap between now and later. But parallel is about things being able to occur simultaneously.