


export const getGift = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=oTpE7pUi096Wk6SzAQ7RuNVW77TJ0gmK&q=${category}&limit=15`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url  //? solo busca la inf si existe images
        }
    });
    return gifs;
};