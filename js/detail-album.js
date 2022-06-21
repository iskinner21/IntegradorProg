let qs = location.search; 
let qtso = new URLSearchParams(qs); 
let id = qtso.get('id'); 
let urlDAl = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}` ;

fetch(urlDAl)
  .then(function (response) {
    return response.json();
})
.then (function (data) {
    console.log(data);
     
    let title = document.querySelector('.titulos1');
    let imgAlbum = document.querySelector ('.imagenes1');
    let artista = document.querySelector('.artista');
    let genero = document.querySelector('.genero');
    let release = document.querySelector('.release');
    

    title.innerText = data.title;
    imgAlbum.src = data.cover;
    artista.innerHTML = `<a href="./detail-artist.html"><h2 class="artista">Artista: ${data.artist.name}</h2></a>`;
    for (let i = 0; i <6; i++) {
    genero.innerHTML = `<h2 class="genero">Genero: ${data.genres.data[0].name}</h2>`}
    release.innerHTML = `<h2 class="release">Release Date: ${data.release_date}</h2>`;



})
.catch (function(error){
    console.log(error);
})

let urlGenres = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}/genres`

    fetch(urlGenres)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    
        let genero = document.querySelector('.genero');

        for (let i = 0; i <6; i++) {
            genero.innerHTML = `<h2 class="genero">Genero: ${data.genres.data.name}</h2>`}
    
    }).catch(function(errores) {
      console.log(errores);  
    })

let urlCanciones = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}/tracks`

    fetch(urlCanciones)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    
        let detalle = document.querySelector('.temasAlb');
        for (let i = 0; i <6; i++) {
        detalle.innerHTML +=`<a href="./detail-album.html?id=${data.data[i].id}"> <li class="albums">${data.data[i].title}</li> </a>`
        }
    
    }).catch(function(errores) {
      console.log(errores);  
    })