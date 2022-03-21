import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';



describe('Pruebas CounterApp', () => {
    const value = 0;
    const wrapper = shallow(<CounterApp value={value} />);

    beforeEach(()=>{  //se ejecuta antes de cada test, sirve para reiniciar las variables
        console.log('BedoreEach!');
    });

    test('debe mostrar CounterApp correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar CounterApp correctamente', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);
        const h2 = wrapper.find('h2').text().trim();
        expect(parseInt(h2)).toBe(value);
    });
    test('debe aumentar con botón +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const h2 = wrapper.find('h2').text().trim();
        expect(parseInt(h2)).toBe(value+1);
    });
    test('debe resetear con botón reset', () => {

        wrapper.find('button').at(1).simulate('click');
        const h2 = wrapper.find('h2').text().trim();
        expect(parseInt(h2)).toBe(value);
    });
    test('debe decrementar con botón -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const h2 = wrapper.find('h2').text().trim();
        expect(parseInt(h2)).toBe(value-1);
    });

});