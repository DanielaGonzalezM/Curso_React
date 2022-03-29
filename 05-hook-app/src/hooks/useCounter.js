import {useState} from 'react';


export const useCounter = (initial = 10) => {

    const [cont, setState] = useState(initial);

    const increment = () => {
        setState(cont + 1);
    };

    const decrement = () => {
        setState(cont - 1);
    };

    const reset = () => {
        setState(initial);
    };


    return { cont, increment, decrement, reset};

}
