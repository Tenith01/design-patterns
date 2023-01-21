var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("Drawing Circle");
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.draw = function () {
        console.log("Drawing Square");
    };
    return Square;
}());
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.createShape = function (shapeType) {
        if (shapeType === "Circle") {
            return new Circle();
        }
        else if (shapeType === "Square") {
            return new Square();
        }
        throw new Error("Invalid shape type");
    };
    return ShapeFactory;
}());
var circle = ShapeFactory.createShape("Circle");
circle.draw(); // Output: "Drawing Circle"
var square = ShapeFactory.createShape("Square");
square.draw(); // Output: "Drawing Square"
