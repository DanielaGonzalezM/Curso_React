import {useState} from 'react';


export const useCounter = (initial = 10) => {

    const [state, setState] = useState(initial);

    const increment = (factor=1) => {
        setState(state + factor);
    };

    const decrement = (factor=factor) => {
        setState(state - 1);
    };

    const reset = () => {
        setState(initial);
    };


    return {state, increment, decrement, reset};

}
