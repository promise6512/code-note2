export default class Snake{
    //表示蛇的元素
    snake:HTMLElement;
    //表示蛇头的元素
    snakeHead:HTMLElement;
    //蛇的身体(包括蛇头)
    snakeBodies:HTMLCollection;
    constructor(){
        this.snake = document.getElementById("snake")!;
        this.snakeHead = document.querySelector("#snake>div") as HTMLElement;
        this.snakeBodies = (<HTMLElement>document.getElementById("snake")).getElementsByTagName('div');
    }

    //获取蛇的坐标(蛇头)
    get X():number{
        return this.snakeHead.offsetLeft;
    }
    get Y():number{
        return this.snakeHead.offsetTop;
    }

    //设置蛇头的坐标
    set X(value:number){
        if(this.X === value){
            return;
        }
        if(value < 0 || value >= 300){
            throw new Error("Game Over");
        }
        //防止掉头
        if(this.snakeBodies[1] && (this.snakeBodies[1] as HTMLElement).offsetLeft === value){
            return;
        }
        this.checkHitBody(value,this.snakeHead.offsetTop)
        this.moveBody()
        this.snakeHead.style.left = value + 'px';
        
    }
    set Y(value:number){
        if(this.Y === value){
            return;
        }
        if(value < 0 || value >= 300){
            throw new Error("Game Over");
        }
        //防止掉头
        if(this.snakeBodies[1] && (this.snakeBodies[1] as HTMLElement).offsetTop === value){
            return;
        }
        this.checkHitBody(this.snakeHead.offsetLeft,value)
        this.moveBody()
        this.snakeHead.style.top = value + 'px';
    }

    //增加身体的方法
    addBody():void{
        let body = document.createElement("div");
        this.snake.appendChild(body)
    }

    //添加蛇移动的方法
    moveBody = ():void => {
        for(let i = this.snakeBodies.length-1;i > 0;i--){
            let preBody = this.snakeBodies[i-1] as HTMLElement;
            let body = this.snakeBodies[i] as HTMLElement;
            body.style.left = preBody.offsetLeft + 'px';
            body.style.top = preBody.offsetTop + 'px';
        }
    }

    //蛇撞到身体
    checkHitBody = (X:number,Y:number):void => {
        /* for(let i = this.snakeBodies.length-1;i > 0;i--){
            let body = this.snakeBodies[i] as HTMLElement;
            if((X+'px' === body.style.left) && (Y+'px' === body.style.top)){
                throw new Error("Game Over");
            }
        } */
    }
}