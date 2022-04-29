
import {shallow} from 'enzyme';
import MultipleCustomHook from '../../../../components/03-examples/MultipleCustomHook';

describe('Pruebas en RealExampleRef', () => { 
    const wrapper=shallow(<MultipleCustomHook />) 
    test('debe mostrarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

     })

     test('debe mostrarse el componente MultipleCustomHooks', () => { 
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    })

 })