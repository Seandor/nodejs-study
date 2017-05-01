Using `using npm run test-watch` to run test watch.

测试异步代码需要在it函数里加入一个参数done，这样测试程序就知道这里是异步的测试，程序会等待，直到done()函数被调用。