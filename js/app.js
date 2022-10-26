const slider = document.querySelector('.img-wrapper');
const thumbsSlider = document.querySelector('.container-thumbs');


const images = [
    {
        title   : "Ciberpunk Oriental City",
        caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consectetur.",
        rif     : "cyberpunk.jpg"
    },
    
    {
        title   : "Cile",
        caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        rif     : "chile.jpg"
    },

    {
        title   : "Colombia",
        caption : "Pablo's Home.",
        rif     : "mountain-lake.jpg"
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
    slider.innerHTML += `
                            <h2 class="info-text hide">${el.title}</h2> <span class="info-text hide">${el.caption}</span>
    <img class="item" src="img/${el.rif}" alt="${el.title}"> `;
    thumbsSlider.innerHTML += ` <img class="thumb" src="img/${el.rif}" alt="${el.title}"> `;
});

//CREO UN CONTATORE PER LE IMMAGINI, LE AGGIUNGO AD UNA COLLECTION ED ASSEGNO LA CLASSE ACTIVE AL PRIMO ELEMENTO
let counterImg = 0;
const item = document.getElementsByClassName('item');
item[counterImg].classList.add('active');
const thumb = document.getElementsByClassName('thumb');
thumb[counterImg].classList.add('active-thumb');

const information = document.getElementsByClassName('info-text');
information[counterImg].classList.add('active-info');
console.log(information)
//NAVIGAZIONE
automaticSlider();
//bottoni
const next = document.querySelector('.right');
const prev = document.querySelector('.left');

next.addEventListener('click', function(){
    console.log('AVANTI')
    nav = 0;
    nextPrev();
    clearInterval(autoplay);
})


prev.addEventListener('click', function(){
    console.log('DIETRO')
    nav = 1;
    nextPrev();
    clearInterval(autoplay);
})






//creo una variabile booleana per la funzione di navigazione
let nav;
function nextPrev(){
    if(nav === 0){
        item[counterImg].classList.remove('active');
        thumb[counterImg].classList.remove('active-thumb');
        
        counterImg++;
        if(counterImg === images.length) counterImg = 0;
        item[counterImg].classList.add('active');
        thumb[counterImg].classList.add('active-thumb');

    } else{
        item[counterImg].classList.remove('active');
        thumb[counterImg].classList.remove('active-thumb');

        
        counterImg--;
        if(counterImg < 0) counterImg = images.length - 1;

        
        thumb[counterImg].classList.add('active-thumb');
    }
}

function automaticSlider(){
    
    const autoplay = setInterval(function(){
        item[counterImg].classList.remove('active');
        thumb[counterImg].classList.remove('active-thumb');
        counterImg++;
        if(counterImg === images.length) counterImg = 0;
        item[counterImg].classList.add('active');
        thumb[counterImg].classList.add('active-thumb');
    }, 1000);
}