const aggregateAlbum = (data) => {
    if(data){
        console.log(data);
        const albums = Array.from(new Set(data.map(v => v.album))).map((albumTitle) => {
            const target = data.find((v) => v.album === albumTitle);
            return target;
        })
    
        return albums;
    }else{
        return undefined;
    }
}

export default aggregateAlbum;