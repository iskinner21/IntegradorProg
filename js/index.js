let chart = " https://developers.deezer.com/api/chart"

fetch(' https://developers.deezer.com/api/chart ')
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      console.log(data.results[0]);
      let info = data.results[0];
      
  })