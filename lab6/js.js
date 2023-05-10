class Prostokat {
    constructor(height, width, nazwa) {
      this.height = height;
      this.width = width;
      this.nazwa = nazwa;
    }

    wypisz() {
        console.log("Nazwa: " + this.nazwa);
        console.log("height: " + this.height);
        console.log("width: " + this.width);
    }
  
    obwod() {
      return 2 * (this.height + this.width);
    }
  
    pole() {
      return this.height * this.width;
    }

    zmienNazwe(nowaNazwa) { 
      this.nazwa = nowaNazwa;
    }

    porownajPola(prostokat) {
      if (this.pole() > prostokat.pole()) {
        return this;
      } else {
        return prostokat;
      }
    }
  }


const prostokat1 = new Prostokat(5, 10, "Prostokąt 1");
const prostokat2 = new Prostokat(7, 12, "Prostokąt 2");
const prostokat3 = new Prostokat(3, 8, "Prostokąt 3");

prostokat1.wypisz();
prostokat2.wypisz();
prostokat3.wypisz();
  
console.log("Obwód prostokąta 1:")
console.log(prostokat1.obwod());
console.log("Pole prostokąta 2:")
console.log(prostokat2.pole());
console.log("Porównanie 1 i 2.")
console.log(prostokat1.porownajPola(prostokat2));
console.log("Porównanie 3 i 1.")
console.log(prostokat3.porownajPola(prostokat1));

class Trojkat {
    constructor(height, base, nazwa) {
      this.height = height;
      this.base = base;
      this.nazwa = nazwa;
    }
  
    pole() {
      return (this.base * this.height) / 2;
    }
  
    porownajPola(trojkat) {
      if (this.pole() > trojkat.pole()) {
        return this;
      } else {
        return trojkat;
      }
    }
  }
  
const trojkat1 = new Trojkat(5, 10, "Trójkąt 1");
const trojkat2 = new Trojkat(7, 12, "Trójkąt 2");
const trojkat3 = new Trojkat(3, 8, "Trójkąt 3");
  
console.log(trojkat1.pole()); 
console.log(trojkat2.pole()); 
console.log(trojkat1.porownajPola(trojkat2));
console.log(trojkat3.porownajPola(trojkat1));


class Trapez {
    constructor(height, base1, base2, nazwa) {
      this.height = height;
      this.base1 = base1;
      this.base2 = base2;
      this.nazwa = nazwa;
    }
  
    pole() {
      return ((this.base1 + this.base2) / 2) * this.height;
    }
  }
  
const trapez1 = new Trapez(5, 10, 8, "Trapez 1");
const trapez2 = new Trapez(7, 12, 9, "Trapez 2");
const trapez3 = new Trapez(3, 8, 6, "Trapez 3");
  
console.log(trapez1.pole()); 
console.log(trapez2.pole()); 
console.log(trapez3.pole()); 


function znajdzNajwiekszaFigure(prostokat, trojkat, trapez) {
    const figury = [prostokat, trojkat, trapez];
    let najwiekszaFigura = figury[0];
    for (let i = 1; i < figury.length; i++) {
      if (figury[i].pole() > najwiekszaFigura.pole()) {
        najwiekszaFigura = figury[i];
      }
    }
    console.log(`Największa figura to ${najwiekszaFigura.nazwa} o polu ${najwiekszaFigura.pole()}`);
  }
  
const prostokat = new Prostokat(5, 10, "Prostokąt"); 
const trojkat = new Trojkat(7, 12, "Trójkąt");
const trapez = new Trapez(3, 8, 6, "Trapez");
  
znajdzNajwiekszaFigure(prostokat, trojkat, trapez);

function porownajObwody(prostokat1, prostokat2) {
  if (prostokat1.obwod() > prostokat2.obwod()) {
    return prostokat1;
  } else {
    return prostokat2;
  }
}

let wiekszyObwod = porownajObwody(prostokat1, prostokat2);
console.log("Prostokąt o większym obwodzie: ", wiekszyObwod.nazwa);


let figura = new Prostokat(5, 10, "Stara Nazwa");
console.log("Nazwa przed zmianą: ", figura.nazwa);

figura.zmienNazwe("Nowa Nazwa");
console.log("Nazwa po zmianie: ", figura.nazwa);