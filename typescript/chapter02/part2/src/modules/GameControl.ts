import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";;
interface turnAround {
    ArrowUp:string;
    ArrowLeft:string;
    ArrowDown:string;
    ArrowRight:string;
}
//游戏控制器 控制其他所有类
export default class Gamecontrol{
    food:Food;
    scorePanel:ScorePanel;
    snake:Snake;
    //蛇移动的方向
    direction:string
    //创建一个属性用来记录游戏是否结束
    isLive:boolean;
   // turnAround:turnAround;
    constructor(){
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.snake = new Snake();
        this.direction = '';
        this.isLive = true;
        /* this.turnAround = {
            ArrowUp:"ArrowDown",
            ArrowLeft:"ArrowRight",
            ArrowDown:"ArrowUp",
            ArrowRight:"ArrowLeft",
        } */
        this.init()
    }
    /*  
       ArrowUp
       ArrowLeft
       ArrowDown
       ArrowRight
    */
    init():void{
        //console.log(1)
        document.addEventListener('keydown',this.keydownHandler)
        this.run()
    }

    keydownHandler = (event:KeyboardEvent):void =>{
        this.direction = event.key;
    }
    
    //蛇吃到食物
    checkEat = () => {
        if(this.snake.X === this.food.X && this.snake.Y === this.food.Y ){
            this.scorePanel.addScore();
            this.food.changeSite();
            this.snake.addBody();
        }
    }
    //创建一个控制蛇移动的方法
    run = ():void => {
        this.checkEat()

        let X = this.snake.X;
        let Y = this.snake.Y
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e){
            this.isLive = false;
            alert(e);
        }
        this.isLive && setTimeout(this.run,300 - (this.scorePanel.level-1)*30)

    }
}