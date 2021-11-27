(function(){
    /* 
       在定义函数或者类时，如果遇到类型不明确就可以使用泛型
           
    */
    function fn<T>(a:T):T{
        return a;
    }

    console.log(fn(10));
    console.log(fn<string>("a111a"))
    
    //多个泛型
    function fn1<T,K>(a:T,b:K):K{
        return b
    }
    console.log(fn1<number,string>(1,'abc'))
    
    interface Inter{
        length:number,
        color:string
    }
    // T extends Inter 表示泛型T必须时Inter实现类（子类）
    let fn3 = <T extends Inter>(a:T):number => {
        return a.length
    }

    console.log(fn3({length:3,color:"red"}))
    
    //类中的泛型
    class MyClass<T,K>{
        private name:T;
        private age:K;
        constructor(name:T,age:K){
            this.name = name;
            this.age = age;
        }

        getName():T{
            return this.name;
        }

        setName(name:T){
            this.name = name;
        }
    }
    
    const mc = new MyClass<string,number>("hjp",29);
    console.log(mc.getName())

})()