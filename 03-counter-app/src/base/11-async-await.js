
export const getImagen = async () =>{

    try{
        const apiKey = 'oTpE7pUi096Wk6SzAQ7RuNVW77TJ0gmK';
        const resp =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url}=data.images.original;
        return url;

    }catch(error){
        return 'No existe';
    }


}


