import PropTypes from 'prop-types' 
import React, {useState} from 'react'

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(0);



    const handleAdd = (e) => {
        setCounter(counter + 1);
    }
    const handleSubs = (e) => {
        setCounter(counter - 1);
    }
    const reset = (e) => {
        setCounter(value);
    }
    

    return (
        <>
        <h1>Counter App</h1>
        <h2>{ value }</h2>
        
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ reset }>Reset</button>
        <button onClick={ handleSubs }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
