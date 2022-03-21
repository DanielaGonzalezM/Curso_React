import {getHeroeByID} from './08-imp-exp';

export const getHeroeByIdAsync = (id) =>{
return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        const h1=getHeroeByID(id);
        
        if(h1){
            resolve(h1);
        }else{
            reject('No se pudo encontrar el heroe');
        }
        
    }, 1500)


});

}

