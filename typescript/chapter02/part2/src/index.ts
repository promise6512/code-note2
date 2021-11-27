//引入样式
import "./style/index.less"
//引入控制器
import Gamecontrol from "./modules/GameControl"
/* import Food from "./modules/Food";
import Snake from "./modules/Snake";
(function () {
    //测试代码
    const food = new Food();
    food.changeSite()
    console.log(typeof food.X, food.X)
    
    const snake = new Snake();
    snake.X = 100;
    snake.Y = 100;
    snake.addBody();
    snake.addBody();
    snake.addBody();
})() */
const gc = new Gamecontrol();