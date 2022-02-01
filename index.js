const urlBase = 'https://rickandmortyapi.com/api/character';

fetch(urlBase)
    .then((response) => {
        //console.log(response.json());
        return response.json();
    })
    .then((respuestaJson) => {
        //console.log(respuestaJson.info);
        //console.log(respuestaJson.results);
        const info = respuestaJson.info;
        const results = respuestaJson.results;

        const lista = document.getElementById('lista');

        results.forEach((personaje) => {
            const itemLi = document.createElement('li');
            itemLi.innerText = personaje.name + " is " + personaje.status;
            lista.appendChild(itemLi);
        });
    });