import Wishlist from "./wishlist";


let form = document.querySelector("#submitForm");
let inputMake = document.querySelector("#makeInput");
let inputModel = document.querySelector("#modelInput");
let inputYear = document.querySelector("#yearInput");
let paraMake = document.querySelector("#car-make");
let paraModel = document.querySelector("#car-model");
let paraYear = document.querySelector("#car-year");
let btnRemove = document.querySelector(".removeBtn");
let wishlistUl = document.querySelector("#wishlistUl");

let newWishlist = new Wishlist();
form.addEventListener("submit", addCar);

function showCarDetails(car){
  paraMake.textContent = car.make;
  paraModel.textContent = car.model;
  paraYear.textContent = car.year;
  btnRemove.disabled = false;
  btnRemove.setAttribute("data-carId", car.id);
}
function updateDOMList() {
  wishlistUl.innerHTML = "";
  // for (let i = 0; i < newWishlist.list.length; i++) {
  newWishlist.list.forEach((car) => {
    let carLi = document.createElement("li");
    carLi.textContent = `${car.make}, ${car.model}`;
    carLi.addEventListener("click", () => showCarDetails(car));
    wishlistUl.appendChild(carLi);
    })
}
function addCar(event) {
  event.preventDefault();
  let make = inputMake.value;
  let model = inputModel.value;
  let year = inputYear.value;
  newWishlist.add(make, model, year);
  updateDOMList();
}

function removeCar() {
  let carId = Number(btnRemove.getAttribute("data-carId"));
  newWishlist.remove(carId);
  updateDOMList();
  paraMake.textContent = "";
  paraModel.textContent = "";
  paraYear.textContent = "";
  btnRemove.disabled = true;
}
btnRemove.addEventListener("click", removeCar);
