import { fileUpload } from "../../src/helpers/fileUpload"

describe('Pruebas en fileUpload', () => { 
    test('debe de subir el archivo correctamente a cloudinary', async() => { 
        const imageURL = 'https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg';
        const resp = await fetch(imageURL);
        const blob = await resp.blob();
        const file =new File([blob],'gatito.jpg');
        const url = await fileUpload(file);
        expect(typeof imageURL).toBe('string');
     })

 })