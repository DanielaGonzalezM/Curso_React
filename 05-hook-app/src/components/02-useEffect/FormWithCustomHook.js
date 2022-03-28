import React, {useEffect, useState} from 'react';
import {useForms} from '../../hooks/useForms';
import './effects.css';


const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForms({name: '', email: '', password: ''});
    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('email cambió');
    }, [email])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }
    return (<form onSubmit={handleSubmit}>
        <h1>FormWithCustomHook</h1>
        <hr/>
        <div className='form-group'>
            <input type='text' name='name' className='form-control' placeholder='Tu nombre' autoCorrect='off'
                value={name}
                onChange={handleInputChange}/>
        </div>

        <div className='form-group'>
            <input type='text' name='email' className='form-control' placeholder='email@gmail.com' autoCorrect='off'
                value={email}
                onChange={handleInputChange}/>
        </div>

        <div className='form-group'>
            <input type='password' name='password' className='form-control' placeholder='****' autoCorrect='off'
                value={password}
                onChange={handleInputChange}/>
        </div>
        <button type='submit' className='btn btn-primary'>Guardar</button>
    </form>)
}

export default FormWithCustomHook
