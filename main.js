const widok = document.querySelectorAll(".widok");
const metryczka = document.querySelector(".metryczka");
const dziennik = document.querySelector(".dziennik");
const podsumowanie = document.querySelector(".podsumowanie");
const m1 = document.querySelector(".m1");
const d1 = document.querySelector(".d1");
const p1 = document.querySelector(".p1");
const sub = document.querySelector("#sub");
const metr = document.querySelector(".metr");
const imie = document.querySelector("#imie");
const nazwisko = document.querySelector("#nazawisko");
const klasa = document.querySelector(".kalasus");
const rok_szkolny = document.querySelector("#rok_szkolny");
const miejsce = document.querySelector(".miejsce");
const data_r = document.querySelector(".datar");
const data_z = document.querySelector(".dataz");
const i1 = document.querySelector("#i1");
const n1 = document.querySelector("#n1");
const k1 = document.querySelector("#k1");
const rs1 = document.querySelector("#rs1");
const mie1 = document.querySelector("#mie1");
const dr1 = document.querySelector("#dr1");
const dk1 = document.querySelector("#dk1");
const edytuj = document.querySelector(".edytu");
const prze = document.querySelector("#prze");
const sel = document.querySelector("#sel");
const czas = document.querySelector("#czas");
let obczas = 140;
let mw = 0;
const mw1 = document.querySelector("#mw1");
let mnik = 0;
const mnik1 = document.querySelector("#mnik1");
let si = 0;
const si1 = document.querySelector("#si1");
let tai = 0;
const tai1 = document.querySelector("#tai1");
const cz1 = document.querySelector("#cz1");

prze.addEventListener("submit", (e) => {
  e.preventDefault();

  if ((sel.value = "Moduł_Wstępny")) {
    mw += parseInt(czas.value);
  } else if ((sel.value = "Montaz_Naprawa")) {
    mnik += parseInt(czas.value);
  } else if ((sel.value = "Systemy_Informatyczne")) {
    si += parseInt(czas.value);
  } else if ((sel.value = "Tworzenie_Aplikacji")) {
    tai += parseInt(czas.value);
  }

  obczas -= czas.value;

  mw1.innerHTML = mw;
  mnik1.innerHTML = mnik;
  si1.innerHTML = si;
  tai1.innerHTML = tai;
  cz1.innerHTML = obczas;
});

sub.addEventListener("submit", (e) => {
  e.preventDefault();

  i1.innerHTML = imie.value;
  n1.innerHTML = nazwisko.value;
  k1.innerHTML = klasa.value;
  rs1.innerHTML = rok_szkolny.value;
  mie1.innerHTML = miejsce.value;
  dr1.innerHTML = data_r.value;
  dk1.innerHTML = data_z.value;
  metryczka.style.display = "none";
  metr.style.display = "block";
});

edytuj.addEventListener("click", (e) => {
  e.preventDefault();

  imie.innerHTML = i1.value;
  nazwisko.innerHTML = n1.value;
  klasa.innerHTML = k1.value;
  rok_szkolny.innerHTML = rs1.value;
  miejsce.innerHTML = mie1.value;
  data_r.innerHTML = dr1.value;
  data_z.innerHTML = dk1.value;
  metryczka.style.display = "block";
  metr.style.display = "none";
});

m1.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < widok.length; i++) {
    widok[i].style.display = "none";
  }
  metryczka.style.display = "block";
});

d1.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < widok.length; i++) {
    widok[i].style.display = "none";
  }
  dziennik.style.display = "block";
});

p1.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < widok.length; i++) {
    widok[i].style.display = "none";
  }
  podsumowanie.style.display = "block";
});
