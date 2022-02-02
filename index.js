//Referencias a objetos el DOM
const lista = document.getElementById('lista');
const footer = document.querySelector('footer.container');
const mainContainer = document.querySelector('main.container');

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
        
        mainContainer.innerHTML = '';
        results.forEach((personaje) => {
            const card = creaCard(personaje);
            mainContainer.appendChild(card);
        });
    });
}

loadData(urlBase);

const loadDataButton = (newUrl) => {
    loadData(newUrl);
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

const creaCard = (personaje) => {

    const divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.classList.add('m-3');
    divCard.style = "width: 18rem; float: left;"

    const image = document.createElement('img');
    image.src = personaje.image;
    image.classList.add('card-img-top');

    const divBody = document.createElement('div');
    divBody.classList.add('card-body');

    const hName = document.createElement('h5');
    hName.classList.add('card-title');
    hName.innerText = personaje.name;

    const pBody = document.createElement('p');
    pBody.classList.add('card-text');
    pBody.innerText = `Is ${ personaje.species }, is ${ personaje.gender } and is from ${ personaje.origin.name }`;

    const bInfo = document.createElement('a');
    bInfo.className = "btn btn-primary";
    bInfo.innerText = "Go somewhere";

    divBody.appendChild(hName);
    divBody.appendChild(pBody);
    divBody.appendChild(bInfo);

    divCard.appendChild(image);
    divCard.appendChild(divBody);

    return divCard;
}