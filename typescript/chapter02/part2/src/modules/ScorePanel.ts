//定义表示记分牌的类
export default class ScorePanel{
    //score和level用来记录分数和等级
    score = 0;
    level = 1;
    //设置一个变量用来限制最高等级
    private maxLevel:number
    //设置一个变量表示多少分时升级
    private upScore:number
    //定义两个属性用于获取DOM元素
    scoreElement:HTMLElement;
    levelElement:HTMLElement;
    constructor(maxLevel:number=10,upScore:number=10){
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreElement = document.getElementById("score")!;
        this.levelElement = document.getElementById("level")!;

    }
    //加分方法
    addScore():void{
        //this.score++;
        this.scoreElement.innerText = ++this.score + '';
        if(this.score % this.upScore == 0){
            this.levelUp()
        }
    }
    //等级提升的方法
    levelUp():void{
        //最高十级
        if(this.level < this.maxLevel){
            this.levelElement.innerText = ++this.level + '';
        }
    }
}

const scorePanel = new ScorePanel()