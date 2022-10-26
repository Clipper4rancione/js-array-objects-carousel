const slider = document.querySelector('.container-img');
const thumbsSlider = document.querySelector('.container-thumbs');

const images = [
    {
        title   : "svezia",
        caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consectetur.",
        rif     : "sweden.jpg"
    },
    
    {
        title   : "Cile",
        caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        rif     : "chile.jpg"
    },

    {
        title   : "Colombia",
        caption : "Pablo's Home.",
        rif     : "pablo.jpg"
    },

    {
        title   : "Perù",
        caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit.",
        rif     : "peru.jpg"
    },

    {
        title   : "Argentina",
        caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        rif     : "argentina.jpg"
    }
];

console.table(images);


//STAMPO LE IMMAGINI NEL DOM

images.forEach(el  => {
    slider.innerHTML += ` <img class="item" src="img/${el.rif}" alt="${el.title}"> `;
    thumbsSlider.innerHTML += ` <img src="img/${el.rif}" alt="${el.title}"> `;
});

//CREO UN CONTATORE PER LE IMMAGINI, LE AGGIUNGO AD UNA COLLECTION ED ASSEGNO LA CLASSE ACTIVE AL PRIMO ELEMENTO
let counterImg = 0;
const item = document.getElementsByClassName('item');
item[counterImg].classList.add('active');


//NAVIGAZIONE

//bottoni
const next = document.querySelector('.right');
const prev = document.querySelector('.left');
let nav;
next.addEventListener('click', function(){
    console.log('AVANTI')
    nav = 0;
    nextPrev();
})


prev.addEventListener('click', function(){
    console.log('DIETRO')
    nav = 1;
    nextPrev();
})

function nextPrev(){
    if(nav === 0){
        item[counterImg].classList.remove('active');
        counterImg++;
        if(counterImg === images.length) counterImg = 0;
        item[counterImg].classList.add('active');

    } else{
        item[counterImg].classList.remove('active');
        counterImg--;
        if(counterImg < 0) counterImg = images.length - 1;
        item[counterImg].classList.add('active');

    }
}