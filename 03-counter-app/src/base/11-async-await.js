



const getImagen = async () =>{

    try{
        const apiKey = 'oTpE7pUi096Wk6SzAQ7RuNVW77TJ0gmK';
        const resp =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url}=data.images.original;
        const img=document.createElement('img');
        img.src=url;
        document.body.append(img);
        console.log(data);
    }catch(error){
        console.error('error',error);
    }


}

getImagen();
