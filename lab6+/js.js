const tablicaLiczb = [1, 7, 7, 0, 1, 3];
const numerAlbumu = 67233;


let sum = tablicaLiczb.reduce((a, b) => a + b, 0);
console.log('Suma wartości w tablicy:', sum);


const parzyste = tablicaLiczb.filter((liczba) => liczba % 2 === 0);
console.log('Liczby parzyste w tablicy:', parzyste);


const pomnozone = tablicaLiczb.map((liczba) => liczba * 3);
console.log('Wartości pomnożone razy 3:', pomnozone);


tablicaLiczb.push(numerAlbumu);
const index = tablicaLiczb.indexOf(numerAlbumu);
console.log('Indeks wartości', numerAlbumu, 'w tablicy:', index);


sum = tablicaLiczb.reduce((a, b) => a + b, 0);
const srednia = sum / tablicaLiczb.length;
console.log('Średnia arytmetyczna wartości w tablicy:', srednia); 


const max = Math.max(...tablicaLiczb);
console.log('Największa liczba w tablicy:', max);

const wybrane = 7;
const wystapienia = tablicaLiczb.filter((liczba) => liczba === wybrane).length;
console.log('Liczba wystąpień wartości', wybrane, 'w tablicy:', wystapienia);