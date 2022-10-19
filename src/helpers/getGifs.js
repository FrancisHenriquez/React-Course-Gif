export const getGifs = async ( category ) => {
    const  url = `https://api.giphy.com/v1/gifs/search?api_key=CFLue9F4UkxllUDO9P3j3h0dPao0AWGH&q=${category}&limit=20`
   
    const resp = await fetch ( url );
    const { data } = await resp.json ();
   
        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_large.url
            
        }));
    
    console.log(gifs);
        return gifs;
}