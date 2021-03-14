const apartmentHouse = {

  set amountOfFloors(amountOfFloors) {
    if(amountOfFloors >= 1 && amountOfFloors <= 25){
      this._amountOfFloors = amountOfFloors;
    } else {
      alert("Invalid value of amount of floors");
      throw new Error();
    }
  },
  get amountOfFloors() {
    return this._amountOfFloors;
  },


  set amountOfEntrances(amountOfEntrances) {
    if(amountOfEntrances >= 1 && amountOfEntrances <= 10) {
      this._amountOfEntrances = amountOfEntrances;
    } else {
      alert("Invalid value of amount of entrances");
      throw new Error();
    }
  },
  get amountOfEntrances() {
    return this._amountOfEntrances;
  },


  set amountOfApartmentsPerFloor(amountOfApartmentsPerFloor) {
    if(amountOfApartmentsPerFloor >= 1 && amountOfApartmentsPerFloor <= 20) {
      this._amountOfApartmentsPerFloor = amountOfApartmentsPerFloor;
    } else {
      alert("Invalid value of amount of apartments per floor");
      throw new Error();
    }
  },
  get amountOfApartmentsPerFloor() {
    return this._amountOfApartmentsPerFloor;
  },


  get amountOfApartmentsPerEntrance() {
    this._amountOfApartmentsPerEntrance = amountOfApartmentsPerFloor * this.amountOfFloors;
    return this._amountOfApartmentsPerEntrance;
  },

  get amountOfApartmentsPerHouse() {
    this._amountOfApartmentsPerHouse = this.amountOfApartmentsPerEntrance * this.amountOfEntrances;
    return this._amountOfApartmentsPerHouse;
  },


  printNumberOfApartmentEntrance(numberOfApartment) {
    let numberOfApartmentEntrance;
    if(numberOfApartment >= 1 && numberOfApartment < this.amountOfApartmentsPerHouse) {
      numberOfApartmentEntrance = Math.ceil(numberOfApartment / this.amountOfApartmentsPerEntrance);
      alert("Your entrance is " + numberOfApartmentEntrance);
    } else {
      alert("Invalid Number Of Apartment");
      throw new Error();
    }
  }
}


let amountOfFloors;
do {
  amountOfFloors = prompt("Input amount of floors: ");
} while(isNaN(amountOfFloors));

apartmentHouse.amountOfFloors = Number(amountOfFloors);


let amountOfEntrances;
do {
  amountOfEntrances = prompt("Input amount of entrances: ");
} while(isNaN(amountOfEntrances));

apartmentHouse.amountOfEntrances = Number(amountOfEntrances);


let amountOfApartmentsPerFloor;
do {
  amountOfApartmentsPerFloor = prompt("Input amount of apartments per floor: ");
} while(isNaN(amountOfApartmentsPerFloor));

apartmentHouse.amountOfApartmentsPerFloor = Number(amountOfApartmentsPerFloor);


let numberOfApartment;
do {
  numberOfApartment = prompt("Input number of apartment");
} while(isNaN(numberOfApartment));

numberOfApartment = Number(numberOfApartment);

apartmentHouse.printNumberOfApartmentEntrance(numberOfApartment);
