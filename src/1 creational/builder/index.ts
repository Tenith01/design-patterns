class Car {
    private make: string;
    private model: string;
    private color: string;
    private price: number;

    constructor(builder: CarBuilder) {
        this.make = builder.make;
        this.model = builder.model;
        this.color = builder.color;
        this.price = builder.price;
    }
}

class CarBuilder {
    public make: string;
    public model: string;
    public color: string = "";
    public price: number = 0;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    setColor(color: string): CarBuilder {
        this.color = color;
        return this;
    }

    setPrice(price: number): CarBuilder {
        this.price = price;
        return this;
    }

    build(): Car {
        return new Car(this);
    }
}

let carBuilder = new CarBuilder("Ford", "Mustang");
let car1 = carBuilder
    .setColor("Red")
    .setPrice(40000)
    .build();
let car2 = carBuilder
    .setColor("green")
    .setPrice(45000)
    .build();

console.log(car1);
console.log(car2);