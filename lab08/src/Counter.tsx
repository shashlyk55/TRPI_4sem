import React, {useState} from 'react';
import './App.css';
import Button from './Button'

function Counter() {
    let [count, setCount] = useState(0)
    return <div id='container'>
        <div id='counter'>
            <p id='num'>{count}</p>
        </div>
        <div id='buttons'>
            <Button title='inc' callBackfunc={() => setCount(++count)} isDisabled={count == 5}/>
            <Button title='reset' callBackfunc={() => setCount(0)} isDisabled={count == 0}/>
        </div>
    </div>
}

export default Counter;
