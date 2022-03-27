import {shallow,simulate} from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas AddCategory.js',()=>{

    const setCategories = jest.fn();
    let wrapper= shallow(<AddCategory setcategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper= shallow(<AddCategory setcategories={setCategories}/>);
    });
    test('debe mostrarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
     });

     test('debe de cambiar la caja de texto', () => { 
        const input = wrapper.find('input');
        const value = 'Hola';
        input.simulate('change',{target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
        
     });

     test('No debe de postear la información con submit',()=>{

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
     });

     test('debe de llamar el setCategory y limpiar la caja de texto',()=>{

        const value='Daniela';
        // 1. simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function)  );

        // 4. el valor del input debe de estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');


     });

})