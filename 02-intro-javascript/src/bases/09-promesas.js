import {getHeroeByID,getHeroeByOwner} from './bases/08-imp-exp';
import heroes from './data/heroes';

// const promesa=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         console.log('2 segundos después');
//         const h1=getHeroeByID(2);
//         //reject('No se pudo encontrar el heroe');
//         resolve(h1);
//     }, 2000)


// });

// promesa.then((heroe)=>{
//     console.log('heroe:',heroe);
// }).catch(err=>console.warn(err));

const getHeroeByIdAsync = (id) =>{
return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        const h1=getHeroeByID(id);
        
        if(h1){
            resolve(h1);
        }else{
            reject('No se pudo encontrar el heroe');
        }
        
    }, 2000)


});

}

getHeroeByIdAsync(2)
// .then(heroes=> console.log('heroe',heroes))
// .catch(err=>console.warn(err))
.then(console.log)
.catch(console.warn)
