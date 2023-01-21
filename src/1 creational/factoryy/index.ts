interface IShape {
    draw(): void;
}

class Circle implements IShape {
    draw(): void {
        console.log("Drawing Circle");
    }
}

class Square implements IShape {
    draw(): void {
        console.log("Drawing Square");
    }
}

class ShapeFactory {
    static createShape(shapeType: string): IShape {
        if (shapeType === "Circle") {
            return new Circle();
        } else if (shapeType === "Square") {
            return new Square();
        }
        throw new Error("Invalid shape type")
    }
}

let circle = ShapeFactory.createShape("Circle");
circle.draw(); // Output: "Drawing Circle"
let square = ShapeFactory.createShape("Square");
square.draw(); // Output: "Drawing Square"
