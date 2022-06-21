

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
        let temasAlbum = document.querySelector ('.cancionda');

        title.innerText = data.name;
        imgAlbum.src =  data.picture;

    })
    .catch(function(error){
        console.log(error);
    })

    let urlCanciones = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/albums`

    fetch(urlCanciones)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    
        let detalle = document.querySelector('.detalles1');
        for (let i = 0; i <6; i++) {
        detalle.innerHTML +=`<a href="./detail-album.html?id=${data.data[i].id}"> <li class="albums">${data.data[i].title}</li> </a>`
        }
    
    }).catch(function(errores) {
      console.log(errores);  
    })

