let body;
let bodyVKole;
let aktivniHrac;
let kostka;
let koncoveBody;

init();

document.querySelector('.tlacitko-hod').addEventListener('click', function () {
    //hod kostkou, vybere náhodné číslo
    kostka = Math.floor(Math.random() * 6) + 1;

    //zobrazí výsledek ve hře
    let kostkaDOM = document.querySelector('.kostka');
    kostkaDOM.style.display = 'block';
    kostkaDOM.textContent = kostka;

    //aktualizovat body kola pokud (ne)padla 1

    //1. přičte body
    if (kostka !== 1) {
        bodyVKole += kostka;
        document.querySelector('#soucasne-' + aktivniHrac).textContent = bodyVKole;

        //přepne hráče a vynuluje body (ideálně bychom zde volaly pouze funkci "dalsi hrac", ale kvůli poznámkám na později, nechávám takto)

        //} else {
        // if (aktivniHrac === 0) {
        // aktivniHrac = 1;
        // } else {
        // aktivniHrac = 0;
        //}

        //ternarni operator = řádek 1 nahrazuje komplikovany if else výše v poznámce
    } else {
        aktivniHrac === 0 ? aktivniHrac = 1 : aktivniHrac = 0;
        bodyVKole = 0;

        document.getElementById('soucasne-0').textContent = '0';
        document.getElementById('soucasne-1').textContent = '0';

        //přepne vizuálně na aktuálního hráče - zrůžoví, tečka
        document.querySelector('.hrac-0-panel').classList.toggle('aktivni');
        document.querySelector('.hrac-1-panel').classList.toggle('aktivni');
    }

});

document.querySelector('.tlacitko-dost').addEventListener('click', function () {
    //přidat současné body k celkovým 
    body[aktivniHrac] += bodyVKole;

    //aktualizovat uživatelské prostředí - ukázat body
    document.querySelector('#body-' + aktivniHrac).textContent = body[aktivniHrac];

    //zkontrolovat zda hráč již vyhrál
    if (body[aktivniHrac] >= koncoveBody) {
        document.querySelector('#jmeno-' + aktivniHrac).textContent = "Vítěz!";
        document.querySelector('.hrac-' + aktivniHrac + '-panel').classList.remove('aktivni');
        document.querySelector('.hrac-' + aktivniHrac + '-panel').classList.add('vitez');
        document.querySelector('.kostka').style.display = "none";
    } else {
        //přepnout hráče
        dalsiHrac()
    }
});

function dalsiHrac() {
    aktivniHrac === 0 ? aktivniHrac = 1 : aktivniHrac = 0;
    bodyVKole = 0;

    document.getElementById('soucasne-0').textContent = '0';
    document.getElementById('soucasne-1').textContent = '0';

    document.querySelector('.hrac-0-panel').classList.toggle('aktivni');
    document.querySelector('.hrac-1-panel').classList.toggle('aktivni');
}

//nová hra
document.querySelector('.tlacitko-novy').addEventListener('click', init);

function init() {
    body = [0, 0];
    aktivniHrac = 0;
    bodyVKole = 0;
    koncoveBody = 100;
    hraProbiha = true;

    document.querySelector('.kostka').style.display = 'none';

    document.getElementById('body-0').textContent = '0';
    document.getElementById('body-1').textContent = '0';
    document.getElementById('soucasne-0').textContent = '0';
    document.getElementById('soucasne-1').textContent = '0';

    document.querySelector('#jmeno-0').textContent = "Hráč 1";
    document.querySelector('#jmeno-1').textContent = "Hráč 2";

    document.querySelector('.hrac-0-panel').classList.remove('aktivni');
    document.querySelector('.hrac-1-panel').classList.remove('aktivni');
    document.querySelector('.hrac-0-panel').classList.remove('vitez');
    document.querySelector('.hrac-1-panel').classList.remove('vitez');
    document.querySelector('.hrac-0-panel').classList.add('aktivni');
};

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("tlacitko-pravidla");

// Get the <span> element that closes the modal
var span = document.getElementById("close-btn");

// When the user clicks on the button, open the modal

document.querySelector(".tlacitko-pravidla").addEventListener('click', function() {
    modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}