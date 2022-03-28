import React, {useEffect, useState} from 'react'

const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0});
    const {x,y}=coords;
    useEffect(() => {

       const mauseMove=(e)=>{
        const coors = {
            x: e.x,
            y: e.y
        };
        setCoords(coors);        
       }
       
        window.addEventListener('mousemove', mauseMove);


        return() => {
            console.log('componente desmontado');
            window.removeEventListener('mousemove',mauseMove);
        }
    }, [])


    return (<div>
        <h3>Eres genial!</h3>
        <p>X:{x} Y:{y}</p>
    </div>)
}

export default Message
