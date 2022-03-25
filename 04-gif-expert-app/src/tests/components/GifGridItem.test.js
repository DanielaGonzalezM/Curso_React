import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas componente GifGridItem',()=>{

    const img={
        title:'cat',
        url:'https://giphy.com/gifs/emote-catjam-jpbnoe3UIa8TU8LM13'
    }
    const wrapper=shallow(<GifGridItem
        key={img.id}
        {...img} />);
    test('El componente GifGridItem debe mostrarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
     });

     test('debe tener  un párrafo con el title', () => { 
        const p= wrapper.find('p');
        expect(p.text().trim()).toBe(img.title); 
      });
      test('debe tener la imagen url', () => { 
        const imge= wrapper.find('img');
        expect(imge.prop('src')).toBe(img.url); 
      });

      test('debe tener animate__fadeIn', () => { 
        const div= wrapper.find('div');
        const className=div.prop('className');
        expect(className.includes('animate__zoomIn')).toBe(true); 
      });
});