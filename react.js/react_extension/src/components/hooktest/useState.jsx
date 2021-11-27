import React, { useState,useEffect } from 'react';

function Example() {
    // 声明一个叫 "count" 的 state 变量
    const [count, setCount] = useState(0);
    const [fruit1, setFruite] = useState('banana')

    useEffect(() => {
        document.title=`You clicked ${count} times`    
    })
    return (
        <div>
            <p>You clicked {count} times</p>
            <p>Your fruit is {fruit1}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={() => setFruite('apple')}>
                Click me
            </button>
        </div>
    );
}
export default Example;