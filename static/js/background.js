const images = [
    "/static/images/IMG_6568.jpg",
    "/static/images/IMG_6498.jpg",
    "/static/images/IMG_6473.jpg",
    "/static/images/IMG_6381.jpg",
    "/static/images/IMG_6321.jpg",
    "/static/images/IMG_6312.jpg",
    "/static/images/IMG_6276.jpg",
    "/static/images/IMG_6430.jpg",
    "/static/images/IMG_6434.jpg",
    "/static/images/IMG_6507.jpg",
    "/static/images/IMG_6520.jpg",
]

let index = 0;
const layers = document.querySelectorAll('.background-layer');

//  **Initial configuration
layers[0].style.backgroundImage = `url(${images[0]})`;
layers[0].classList.add('show');  // First visible layer
layers[1].style.backgroundImage = `url(${images[1]})`;
layers[1].classList.add('hide');  // Second visible layer

function changeBackground() {
// Wyznaczamy warstwy: aktywna (widoczna) i nowa (do zmiany)
let activeLayer = layers[index % 2];      // Aktywna warstwa (widoczna)
let newLayer = layers[(index + 1) % 2];   // Nowa warstwa (następne zdjęcie)

// **Najpierw ustawiamy nowe zdjęcie!**
newLayer.style.backgroundImage = `url(${images[(index + 1) % images.length]})`;

// **Zmieniamy klasy, aby rozpocząć płynne przejście**
newLayer.classList.add('show');
newLayer.classList.remove('hide');

// **Po animacji ukrywamy poprzednią warstwę**
setTimeout(() => {
    activeLayer.classList.remove('show');
    activeLayer.classList.add('hide');
}, 1000);  // Czas przejścia (dopasowany do CSS)

// **Zmieniamy indeks na kolejne zdjęcie**
index = (index + 1) % images.length;
}

//  Uruchamiamy zmianę tła co 5 sekund
setInterval(changeBackground, 5000);
