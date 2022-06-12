let tracks = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks'

fetch(tracks)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      console.log(data.data);
      
      let info = (data.results)
  })