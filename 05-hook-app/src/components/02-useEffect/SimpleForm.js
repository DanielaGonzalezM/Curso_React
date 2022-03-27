import React, { useEffect, useState } from 'react';
import './effects.css';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });
    const {name,email}=formState;
    useEffect(()=>{
        console.log('hola');
        
    },[]);
    useEffect(()=>{
        console.log('formState cambio');
        
    },[formState]);

    useEffect(()=>{
        console.log('email cambio');
        
    },[email]);

    const handleInputChange=({target})=>{

        setFormState({
            ...SimpleForm,
            [target.name]:target.value
        });

    }
    return (<>
        <h1>useEffect</h1>
        <hr/>
        <div className='form-group'>
            <input 
            type='text'
            name='name'
            className='form-control'
            placeholder='Tu nombre'
            autoCorrect='off'
            value={name}
            onChange={handleInputChange}
            />
        </div>

        <div className='form-group'>
            <input 
            type='text'
            name='email'
            className='form-control'
            placeholder='email@gmail.com'
            autoCorrect='off'
            value={email}
            onChange={handleInputChange}
            />
        </div>

    </>)
}

export default SimpleForm
