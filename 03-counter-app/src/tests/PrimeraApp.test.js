import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';

describe('Pruebas en PrimeraApp', () => {
    // test('Debe de mostrar el mensaje como estas?', () => { 
    //     const saludo ="como estas?";
    //     const {getByText} = render(<PrimeraApp pregunta={saludo}/>);
    //     expect(getByText(saludo)).toBeInTheDocument();
    //  });
    test('debe mostrar PrimeraApp correctamente', () => {
        const pregunta = "como estas?";
        const wrapper = shallow(<PrimeraApp pregunta={pregunta} />);

        expect(wrapper).toMatchSnapshot();
    });


    test('debe mostrar el subtitulos enviado por props', () => {
        const pregunta = "como estas?";
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(<PrimeraApp pregunta={pregunta} subtitulo={subtitulo} />);
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);

    });

});