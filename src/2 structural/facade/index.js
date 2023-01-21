var SubSystemA = /** @class */ (function () {
    function SubSystemA() {
    }
    SubSystemA.prototype.methodA = function () {
        console.log("Method of SubSystem A");
    };
    return SubSystemA;
}());
var SubSystemB = /** @class */ (function () {
    function SubSystemB() {
    }
    SubSystemB.prototype.methodB = function () {
        console.log("Method of SubSystem B");
    };
    return SubSystemB;
}());
var Facade = /** @class */ (function () {
    function Facade() {
        this.subSystemA = new SubSystemA();
        this.subSystemB = new SubSystemB();
    }
    Facade.prototype.method = function () {
        console.log("Facade Method Start");
        this.subSystemA.methodA();
        this.subSystemB.methodB();
        console.log("Facade Method End");
    };
    Facade.prototype.GetSubSystemADetails = function () {
        this.subSystemA.methodA();
    };
    Facade.prototype.GetSubSystemBDetails = function () {
        this.subSystemB.methodB();
    };
    return Facade;
}());
var facade = new Facade();
facade.method();
facade.GetSubSystemADetails();
facade.GetSubSystemBDetails();
// Output: "Facade Method Start" "Method of SubSystem A" "Method of SubSystem B" "Facade Method End"
