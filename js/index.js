

let URLartistas = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists'

fetch(URLartistas)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.data);
    let info = data.data; 

    let artistas = document.querySelector('.articleArtistas');
    let elementosLista = '';

    
    for(let i=0; i<6; i++){
        elementosLista += `<div class="artistas">
        <a href="./detail-artist.html?id=${info[i].id}"><h3>${info[i].name}</h3>
        <img src="   ${info[i].picture}" class="img-a" alt="${info[i].name}"
        </a>
       </div>`
    };

    artistas.innerHTML = elementosLista;
    })
  .catch(function(error){
    console.log(error);
  }) 
  
let albums = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums'

fetch(albums)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.data);
  })
  .catch(function(error){
    console.log(error);
  }) 

let URLtracks = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks'

fetch(URLtracks)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      console.log(data.data);
      
      let info = data.data;

      let tracks = document.querySelector('.articleCanciones')
      let elementosLista = '';

      for(let i=0; i<6; i++){
       elementosLista += `<div class="canciones">
       <a href="./detail-track.html?id=${info[i].id}"><h3>${info[i].title}</h3>
       <img src="   ${info[i].album.cover}" class="img-c"  alt="${info[i].title}">
       <p>${info[i].artist.name}</p>
       </a>
       </div>`
    };

    tracks.innerHTML = elementosLista;

  })
  .catch(function(error){
    console.log(error);
  }) 

