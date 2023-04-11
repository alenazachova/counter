//counter
//1. pri stiknuti tlacitka increase se zmeni barva number na zelenou
let selector = document.querySelector(".number");

function add() {
  let pridej = Number(selector.innerHTML);
  pridej += 1;
  //aby se mi to vypsalo
  selector.innerHTML = pridej;
  vysledekZmeny();
}
function red() {
  let uber = Number(selector.innerHTML);
  uber -= 1;
  selector.innerHTML = uber;
  vysledekZmeny();
}

function black() {
  selector.innerHTML = 0;
  vysledekZmeny();
}

let plus = document.querySelector(".increase");
plus.addEventListener("click", add);

//2. pri stisknuti na tlacitko decrease se dá barva na červenou
let minus = document.querySelector(".decrease");
minus.addEventListener("click", red);

//3.reset zpět na černou
let reset = document.querySelector(".reset");
reset.addEventListener("click", black);

//4.zvětšit o jedna když kliknu na increase

function vysledekZmeny() {
  let vysledek = Number(selector.innerHTML);
  if (vysledek > 0) {
    selector.style.color = "green";
  } else if (vysledek === 0) {
    selector.style.color = "black";
  } else {
    selector.style.color = "red";
  }
}
