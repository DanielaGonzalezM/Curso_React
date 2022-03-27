import { useFetchGift } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas useFetchGifs', () => {

    test('debe retornar le estado inicial', async() => {

        const { result,waitForNextUpdate } = renderHook(() => useFetchGift('Cats'));

        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('debe retornar un arreglo de imgs y el loading en false', async() => { 
        
        const { result,waitForNextUpdate } = renderHook(() => useFetchGift('Cats'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        
        expect(data.length).toEqual(15);
        expect(loading).toBe(false);

     })

});