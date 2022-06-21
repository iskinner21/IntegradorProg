

let qs = location.search; 
let qtso = new URLSearchParams(qs); 
let id = qtso.get('id'); 
let url1 = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}` ;


fetch (url1)
    .then (function (response) {
        return response.json()
    })
    .then (function (data) {
        console.log(data);

        let title = document.querySelector ('h1');
        let imgAlbum = document.querySelector ('.imgda');
        let temasAlbum = document.querySelector ('.contenedorpadre');

        title.innerText = data.name;
        imgAlbum.innerText =  `<img src="${info[i].picture}" alt="${data[i].name}" class="imgda"></img>`  
        temasAlbum.innerText = data.tracks        

        

    

    })
    .catch(function(error){
        console.log(error);
    })



