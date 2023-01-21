var Car = /** @class */ (function () {
    function Car(builder) {
        this.make = builder.make;
        this.model = builder.model;
        this.color = builder.color;
        this.price = builder.price;
    }
    return Car;
}());
var CarBuilder = /** @class */ (function () {
    function CarBuilder(make, model) {
        this.color = "";
        this.price = 0;
        this.make = make;
        this.model = model;
    }
    CarBuilder.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    CarBuilder.prototype.setPrice = function (price) {
        this.price = price;
        return this;
    };
    CarBuilder.prototype.build = function () {
        return new Car(this);
    };
    return CarBuilder;
}());
var carBuilder = new CarBuilder("Ford", "Mustang");
var car1 = carBuilder
    .setColor("Red")
    .setPrice(40000)
    .build();
var car2 = carBuilder
    .setColor("green")
    .setPrice(45000)
    .build();
console.log(car1);
console.log(car2);
