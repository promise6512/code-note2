function myModule(){
    var msg = 'my atguigu';
    function doSomething(){
        console.log('doSomething()' + msg.toUpperCase())
    }

    function doOtherthing(){
        console.log('doOtherthing()' + msg.toLowerCase())
    }

    return {
        doSomething : doSomething,
        doOtherthing : doOtherthing
    }

}

