var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.Start = function () {
        alert('Engine started: ' + this.engine);
    };

    Car.prototype.Stop = function () {
        alert('Engine stopped: ' + this.engine);
    };
    return Car;
})();

window.onload = function () {
    var car = new Car('V8');
    car.Start();
    car.Stop();
};
//# sourceMappingURL=Car.js.map
