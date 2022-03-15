const persona={
    nombre: 'Daniela',
    apellido: 'Gonzalez',
    edad: 30,
    direccion: {
        ciudad: 'Viña del Mar',
        zip: 2312313,
        lat: 14.432123,
        lng: 23.3244 
    }
};
console.table(persona);
console.log({persona});

const persona2=persona; //copia la referencia en memoria
console.log({persona2});
persona2.nombre='Dany';
console.log({persona});

const persona3={...persona}; //copia la estructura y los datos del objeto
console.log({persona3});
persona3.nombre='Danny';
console.log({persona});
