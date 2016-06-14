class Car {
    engine: string;
    constructor(engine: string) {
        this.engine = engine;
    }

    Start() {
        alert('Engine started: ' + this.engine);
    }

    Stop() {
        alert('Engine stopped: ' + this.engine);
    }
}

window.onload = function () {
    var car = new Car('V8');
    car.Start();
    car.Stop();
}

