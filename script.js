/* ==========================
   CAMBIO PAGINE
========================== */


let currentPage = 1;

const pages = document.querySelectorAll(".page");


function nextPage(){

    if(currentPage < pages.length){

        pages[currentPage-1].classList.remove("active");

        currentPage++;

        pages[currentPage-1].classList.add("active");


        if(currentPage === 4){

            calculateDays();

        }


        if(currentPage === 5){

            // aspetta che la lettera venga aperta

        }

    }

}



/* ==========================
   SCRITTA INIZIALE
========================== */


const titleText="Ciao Nicola ❤️";

let titleIndex=0;


function typingTitle(){


    if(titleIndex < titleText.length){


        document.getElementById("typing").innerHTML +=
        titleText.charAt(titleIndex);


        titleIndex++;


        setTimeout(typingTitle,120);


    }

}


typingTitle();





/* ==========================
   STELLE
========================== */


function createStars(){


    const stars=document.getElementById("stars");


    for(let i=0;i<150;i++){


        let star=document.createElement("div");


        star.className="star";


        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";


        star.style.animationDelay=
        Math.random()*3+"s";


        stars.appendChild(star);


    }


}


createStars();





/* ==========================
   CUORI VOLANTI
========================== */


function createHeart(){


    const container=document.getElementById("hearts");


    const heart=document.createElement("div");


    heart.className="heart";


    const symbols=[
        "❤️",
        "💖",
        "💕",
        "💗",
        "💘"
    ];


    heart.innerHTML=
    symbols[Math.floor(Math.random()*symbols.length)];


    heart.style.left=
    Math.random()*100+"vw";


    heart.style.fontSize=
    (20+Math.random()*30)+"px";


    heart.style.animationDuration=
    (5+Math.random()*5)+"s";



    container.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },10000);


}


setInterval(createHeart,400);






/* ==========================
   QUIZ
========================== */


function wrong(){


document.getElementById("quizResult").innerHTML=

"😂 No dai... prova ancora ❤️";


}




function correct(){


document.getElementById("quizResult").innerHTML=

"🥰 Esatto! Hai vinto un bacio ❤️";



setTimeout(()=>{

nextPage();

},1800);


}





/* ==========================
   CONTATORE DAL 22/11/2024
========================== */


function calculateDays(){


const startDate =
new Date("2024-11-22");



const today =
new Date();



const difference =
today-startDate;



const days =
Math.floor(
difference/(1000*60*60*24)
);



animateDays(days);


}





function animateDays(target){


let number=0;


const counter=
document.getElementById("daysCounter");



const interval=setInterval(()=>{


number++;


counter.innerHTML=
number+" ❤️";



if(number>=target){


clearInterval(interval);


counter.innerHTML=
target+" giorni ❤️";


}



},15);


}








/* ==========================
   GALLERIA
========================== */


const photos=[


"img/foto1.jpg",

"img/foto2.jpg",

"img/foto3.jpg",

"img/foto4.jpg"


];


let photoIndex=0;



function nextPhoto(){


photoIndex++;


if(photoIndex>=photos.length){

photoIndex=0;

}



document.getElementById("galleryImage").src=
photos[photoIndex];


}




function previousPhoto(){


photoIndex--;


if(photoIndex<0){

photoIndex=photos.length-1;

}



document.getElementById("galleryImage").src=
photos[photoIndex];


}







/* ==========================
   MUSICA
========================== */


let musicPlaying=false;



function toggleMusic(){


const music=
document.getElementById("music");


const button=
document.getElementById("musicBtn");



if(!musicPlaying){


music.play();


button.innerHTML="⏸️";


musicPlaying=true;



}

else{


music.pause();


button.innerHTML="🎵";


musicPlaying=false;


}


}







/* ==========================
   LETTERA
========================== */


const letterText=

`
Caro Nicola ❤️


Dal 22 Novembre 2024 è iniziata
la nostra bellissima storia.


Grazie per tutti i sorrisi,
gli abbracci e i momenti insieme.


Con te anche le cose semplici
diventano speciali.


Sei la mia persona preferita.


Ti sceglierei ogni giorno.


Ti amo.


Anna ❤️

(alla fine informatica mi è tornata utile XD)
`;



let letterStarted=false;



function openLetter(){


if(letterStarted)
return;


letterStarted=true;


document.querySelector(".envelope").style.display="none";


document.querySelector(".letter")
.classList.remove("hidden");



let index=0;


const text=
document.getElementById("loveText");



function write(){


if(index<letterText.length){


text.innerHTML +=
letterText.charAt(index);



index++;


setTimeout(write,45);


}

else{


document.getElementById("continueLetter")
.style.display="inline-block";


}


}


write();


}







/* ==========================
   CUORI INVIATI
========================== */


let loveCount=0;



function sendLove(){


loveCount++;


document.getElementById("loveClicks")
.innerHTML=

"Amore inviato: "
+
loveCount
+
" ❤️";



heartExplosion();


}








/* ==========================
   ESPLOSIONE
========================== */


function heartExplosion(){


for(let i=0;i<70;i++){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";


heart.style.left="50%";


heart.style.top="50%";


heart.style.fontSize=
(20+Math.random()*35)+"px";


heart.style.zIndex="9999";


heart.style.transition="2s";



document.body.appendChild(heart);



setTimeout(()=>{


heart.style.transform=

`
translate(
${(Math.random()-0.5)*800}px,
${(Math.random()-0.5)*800}px
)
scale(2)
`;



heart.style.opacity=0;



},20);



setTimeout(()=>{

heart.remove();

},2500);



}


}








/* ==========================
   MESSAGGIO SEGRETO
========================== */


function showSecret(){


document.getElementById("secret")
.classList.remove("hidden");



document.getElementById("secretButton")
.style.display="none";


heartExplosion();


}