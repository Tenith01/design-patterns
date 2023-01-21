class SubSystemA {
    public methodA(): void {
        console.log("Method of SubSystem A");
    }
}

class SubSystemB {
    public methodB(): void {
        console.log("Method of SubSystem B");
    }
}

class Facade {
    private subSystemA: SubSystemA;
    private subSystemB: SubSystemB;

    constructor() {
        this.subSystemA = new SubSystemA();
        this.subSystemB = new SubSystemB();
    }

    public method(): void {
        console.log("Facade Method Start");
        this.subSystemA.methodA();
        this.subSystemB.methodB();
        console.log("Facade Method End");
    }

    public GetSubSystemADetails(): void {
        this.subSystemA.methodA();
    }
    public GetSubSystemBDetails(): void {
        this.subSystemB.methodB();
    }
}

const facade = new Facade();
facade.method();
facade.GetSubSystemADetails();
facade.GetSubSystemBDetails();
// Output: "Facade Method Start" "Method of SubSystem A" "Method of SubSystem B" "Facade Method End"
