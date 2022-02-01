//Referencias a objetos el DOM
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');

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
        
        //Desabilitar botones
        if(info.prev === null){
            btnLeft.classList.add('disabled')
        }else {
            btnLeft.href = info.prev
        }
        if(info.next === null){
            btnRight.classList.add('disabled')
        } else {
            btnRight.href = info.next
        }

        const results = respuestaJson.results;
        console.log(info);

        const lista = document.getElementById('lista');

        results.forEach((personaje) => {
            const itemLi = document.createElement('li');
            itemLi.innerText = personaje.name + " is " + personaje.status;
            lista.appendChild(itemLi);
        });
    });
