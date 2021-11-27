 //定义食物类
 export default class Food {
    element:HTMLElement;
   // X:number;
    constructor(){
        //加上“！” ，告诉解析器不用考虑document.getElementById("food")为空的情况
        this.element = document.getElementById("food")!;
      //  this.X = this.element.offsetHeight;
    }

    //定义一个获取x轴坐标的方法
    get X():number{
        return this.element.offsetLeft
    }
    //定义一个获取y轴坐标的方法
    get Y():number{
        return this.element.offsetTop;
    }

    //修改食物位置的方法
    changeSite():void{
        //生成随机位置
        //0<left<290 坐标必须是整10
        let left = Math.floor(Math.random()*30)*10;
        let top = Math.floor(Math.random()*30)*10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

