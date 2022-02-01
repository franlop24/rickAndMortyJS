//Referencias a objetos el DOM
const lista = document.getElementById('lista');
const footer = document.querySelector('footer.container');

const urlBase = 'https://rickandmortyapi.com/api/character';

const loadData = (urlBase) => {
    
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

        footer.innerHTML = '';
        creaButtons();

        if(info.prev === null){
            btnLeft.classList.add('disabled')
        }else {
            //btnLeft.href = info.prev
            btnLeft.classList.remove('disabled')
            btnLeft.addEventListener('click', () => loadDataButton(info.prev))
        }
        if(info.next === null){
            btnRight.classList.add('disabled')
        } else {
            //btnRight.href = info.next
            btnRight.classList.remove('disabled')
            btnRight.addEventListener('click', () => loadDataButton(info.next))
        }
        
        const results = respuestaJson.results;
        console.log(info);
        
        lista.innerHTML = '';
        results.forEach((personaje) => {
            const itemLi = document.createElement('li');
            itemLi.innerText = personaje.name + " is " + personaje.status;
            lista.appendChild(itemLi);
        });
    });
}

loadData(urlBase);

const loadDataButton = (urlBase) => {
    loadData(urlBase);
}

const creaButtons = () => {
    const btnLeft = document.createElement('button');
    btnLeft.className = "btn btn-primary m-3";
    btnLeft.id = "btnLeft";
    btnLeft.innerHTML = "Prev";
    const btnRight = document.createElement('button');
    btnRight.className = "btn btn-success m-3";
    btnRight.id = "btnRight";
    btnRight.innerHTML = "Next";
    
    footer.appendChild(btnLeft);
    footer.appendChild(btnRight);
}