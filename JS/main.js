// ARRAY Images ****************

let imgArray = [ 
    { name: "cancer", img: "IMG/cancer.png", }, 
    { name: "cancer", img: "IMG/cancer.png", },
    { name: "capri", img: "IMG/capri.png", },
    { name: "capri", img: "IMG/capri.png", }, 
    { name: "fire", img: "IMG/fire.png", },
    { name: "fire", img: "IMG/fire.png", }, 
    { name: "moon", img: "IMG/moon.png", },
    { name: "moon", img: "IMG/moon.png", },
    { name: "sat", img: "IMG/sat.png", },
    { name: "sat", img: "IMG/sat.png", },
    { name: "snake", img: "IMG/snake.png", },
    { name: "snake", img: "IMG/snake.png", },
    { name: "sun", img: "IMG/sun.png", },
    { name: "sun", img: "IMG/sun.png", },
    { name: "tarot", img: "IMG/tarot.png", },
    { name: "tarot", img: "IMG/tarot.png", }
]; 


// FUNCTION RANDOM IMG DANS ARRAY

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}
  

shuffle(imgArray);


let AllImg = document.querySelectorAll('.gameImg');


if (AllImg.length == imgArray.length) {
    for (let i = 0; i < AllImg.length; i++) {

        AllImg[i].setAttribute('src', imgArray[i].img )
        
    }
}

let tab = []; //ARRAY vide PUSH img dedans
let countClick = 0; //VERIF click 2 cartes
let countClick2 = 0; // Count click en tout
let countWin = 0; // COUNT MODAL WIN

AllImg.forEach(SingleImg => {
    SingleImg.addEventListener('click', function(event){
        event.target.style.opacity = 1;
        countClick++;
        countClick2++;
        count.innerHTML = countClick2;
        tab.push(event.target);

        if (countClick == 2) {

            if (tab[0].currentSrc == tab[1].currentSrc) {
                event.target.style.opacity = 1;
                tab=[];
                countClick=0;
                countWin ++;

                if (countWin === 8) {        
                    modal.style.display = 'block'
                    modal.style.color = 'black'
                    modal.classList.add('show')
                    modalBody.innerHTML = '🎉 Vous avez gagné 🎉'
                }
            }

            else {
                setTimeout(()=> {
                    tab[0].style.opacity = 0;
                    tab[1].style.opacity = 0;
                    tab=[]
                }
                , 700)
                countClick=0
            }
        }
    })
});

let count = document.querySelector('.count');
let modal = document.querySelector('.modal')
let modalBody = document.querySelector('.modal-body')