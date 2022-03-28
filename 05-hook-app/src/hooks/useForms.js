import {useState} from "react"


export const useForms = (initialState = {}) => {

    const [values, setvalues] = useState(initialState);

    const handleInputChange = ({target}) => {

        setvalues({
            ...values,
            [target.name]: target.value
        });

    }

    return [values, handleInputChange];
}
