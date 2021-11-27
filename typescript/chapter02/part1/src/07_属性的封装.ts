(function(){
    class Person{
        // TS可以在属性前添加属性的修饰符
        /*
        *   public 修饰的属性可以在任意位置访问（修改） 默认值
        *   private 私有属性，私有属性只能在类内部进行访问（修改）
        *       - 通过在类中添加方法使得私有属性可以被外部访问
        *   protected 受包含的属性，只能在当前类和当前类的子类中访问（修改）
        *
        * */
        private _name:string;
        private _age:number;
        protected _address:string
        constructor(name:string,age:number){
            this._name = name;
            this._age = age;
            this._address = "杭州"
        }

        /* getName():string{
            return this.name;
        }
        setName(name:string):void{
            this.name = name;
        }
        getAge():number{
            return this.age;
        }
        setAge(age:number):void{
            if(age > 0){
                this.age = age;
            }
        } */
        get name():string{
            return this._name;
        }
        
        set name(name:string){
            this._name = name
        }
    }
   
    class Student extends Person{
        test():void{
            //console.log(this._name) _name是私有属性,不能在子类中访问
            console.log(this._address) //_address是protected，可以在子类中访问,但是不能在外部访问
        }
    }
    const per = new Person("孙悟空",28)
    //per.name = '猪八戒'  -->只能在类中访问
   /*  per.setName('猪八戒')
    console.log(per.getName())
    per.setAge(-1);
    console.log(per.getAge()) */
    per.name = "猪八戒"
    console.log(per.name)

    const stu = new Student("zy",20);
   // console.log(stu._address)


   //简化写法
   class A{
        constructor(public name:string,public age:number){
            //赋值自动完成
        }
   }
   const a = new A("xxx",18)
   console.log(a)
})()