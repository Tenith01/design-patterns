class Subject {
    private value: number = 0;
    private observers: Array<(value: number) => void> = [];

    public setValue(value: number) {
        this.value = value;
        this.notify();
    }

    public subscribe(observer: (value: number) => void) {
        this.observers.push(observer);
    }

    public unsubscribe(observer: (value: number) => void) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    private notify() {
        this.observers.forEach(observer => observer(this.value));
    }
}

const subject = new Subject();
const observerA = (value: number) => console.log(`Observer A: ${value}`);
const observerB = (value: number) => console.log(`Observer B: ${value}`);

subject.subscribe(observerA);
subject.subscribe(observerB);

subject.setValue(1); // Observer A: 1, Observer B: 1