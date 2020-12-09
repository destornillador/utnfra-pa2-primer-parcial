export function getHTTP(url){
    return fetch(url)
      .then(function(res){
        return res.json();
      });
  }