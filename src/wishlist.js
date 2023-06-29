import Car from "./car.js";
export default class Wishlist {
  constructor() {
    this.list = [];
    this.nextId = 0;
  }
  add(make, model, year) {
    let car = new Car(this.nextId++, make, model, year);
    this.list.push(car);
  }
  remove(carId) {
    // for (let i = 0; i < this.list.length; i++) {
      // if (this.list[i] === carId) {
      //   this.list.splice(i, 1);
      //   return;
      // }
      this.list = this.list.filter(car => car.id !== carId);
    //}
  }
}
