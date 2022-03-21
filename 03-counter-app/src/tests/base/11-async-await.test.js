import { getImagen } from "../../base/11-async-await";

describe('pruebas en 11-async-await',()=>{

test('pruebas getImagen', async() => { 
    const url=await getImagen();
    
    expect(url.includes('https://')).toBe(true);


 })



});