class Vehicle {
    constructor(protected color: string) {}

    protected honk(): void {
        console.log('beep')
    }
}

const vehicle = new Vehicle('orange');
//console.log(vehicle.color);


class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log('vroom')
    }

    startDDrivingProcess(): void {
        this.honk();
    }
}


const car = new Car(4,'red');
