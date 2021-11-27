/* 
自定义Promise函数模块: IIFE
*/
(function (window) {
    const PENDING = 'pending';
    const RESOLVED = 'resolved';
    const REJECTED = 'rejected';
    function Promise(excutor) {
        //将当前Promise对象保存
        const self = this;
        self.status = PENDING
        self.data = undefined
        self.callbacks = []
        /* 
        Promise构造函数
        excutor: 执行器函数(同步执行)
        */
        function resolve(value) {
            //如果状态不是pedding 直接结束
            if (self.status !== PENDING) {
                return
            }

            //将状态改为resolved
            self.status = RESOLVED
            self.data = value
            //如果有待执行的callback函数 立即异步执行回调函数onResolved
            if (self.callbacks.length > 0) {
                setTimeout(() => {
                    self.callbacks.forEach(callbacksObj => {
                        callbacksObj.onResolved(value)
                    })
                })
            }
        };

        function reject(reason) {
            //如果状态不是pedding 直接结束
            if (self.status !== PENDING) {
                return
            }

            //将状态改为rejected
            self.status = REJECTED;
            self.data = reason;
            //如果有待执行的callback函数 立即异步执行回调函数onRejected
            if (self.callbacks.length > 0) {
                setTimeout(() => {
                    self.callbacks.forEach(callbacksObj => {
                        callbacksObj.onRejected(reason)
                    })
                })
            }
        }

        try {
            excutor(resolve, reject)
        } catch (error) {
            //如果执行器抛出异常 promise对象变为rejected
            reject(error)
        }
    }

    /* 
    Promise原型对象的then()
    指定成功和失败的回调函数
    返回一个新的promise对象
    */
    Promise.prototype.then = function (onResolved, onRejected) {
        
        onResolved= typeof onResolved === 'function' ? onResolved : value => value;
        //指定默认的失败回调用于实现异常穿透
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason} 

        //假设当前状态还是pedding 回调函数保存
        const self = this
       // console.log(self)
        return new Promise((resolve,reject) => {
      
            function handle(callback){
                try{
                    const result = callback(self.data);
                    if (result instanceof Promise){
                        // 如果回调函数返回的是Promise 则 then 返回的结果就是这个Promise
                        result.then(resolve,reject);
                    }else{
                        resolve(result)
                    }
                }catch(error){
                    reject(error)
                };  
            }

            if(self.status === PENDING){
                self.callbacks.push({
                    onResolved(value){
                       handle(onResolved)
                    },
                    onRejected(reason){
                       handle(onRejected)
                    }
                })
            }else if(self.status === RESOLVED){
                setTimeout(()=>{
                    handle(onResolved)
                })
            }else{
                setTimeout(()=>{
                   handle(onRejected)
                })
            }
        })
    }

    /* 
    Promise原型对象的catch()
    指定失败的回调函数
    返回一个新的promise对象
    */
    Promise.prototype.catch = function (onRejected) {
        this.then(undefined,onRejected)
    }

    /* 
    Promise函数对象的resolve方法
    返回一个指定结果的成功的promise
    */
    Promise.resolve = function (value) {
        return new Promise((resolve,reject)=>{
            //value是Promise
            if (value instanceof Promise){
                value.then(resolve,reject)
            }else{
                resolve(value);
            }
        })
    }

    /* 
    Promise函数对象的reject方法
    返回一个指定reason的失败的promise
    */
    Promise.reject = function (reason) {
        //返回一个失败的Promise
        return new Promise ((resolve,reject) =>{
            reject(reason);
        });
    };

    /* 
    Promise函数对象的all方法
    返回一个promise, 只有当所有proimse都成功时才成功, 否则只要有一个失败的就失败
    */
    Promise.all = function (promises) {
        
    }

    /* 
    Promise函数对象的race方法
    返回一个promise, 其结果由第一个完成的promise决定
    */
    Promise.race = function (promises) {

    }

    // 向外暴露Promise函数
    window.Promise = Promise
})(window)