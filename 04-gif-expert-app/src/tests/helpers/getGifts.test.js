import {getGift} from '../../helpers/getGifs'
describe('Pruebas getGifts.js',()=>{
    test('debe traer 10 elementos', async () => { 
        const gift=await getGift('Cats');
        expect(gift.length).toBe(15);
     })

     test('debe traer 0 elementos', async () => { 
        const gift=await getGift('');
        expect(gift.length).toBe(0);
     })
});