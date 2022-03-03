var car = {
  name: "BMW",
  model: "x5",
  unit: 4,
  getInfo: function () {
    console.log(`
        Car name ${this.name},
        Model is ${this.model},
        total unit is ${this.unit}
        `);
  },
};

car.getInfo();

var bike = {
  name: "Honda",
  model: "special",
  unit: 6,
};

var bikeDetails = car.getInfo.bind(bike); //Bind gives the refrence
bikeDetails();
car.getInfo.call(bike); //calls directly calls the function
