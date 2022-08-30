function Foo (car) {
    this.bar = function () {
        this.bar = () => {
            console.log(this.car);
        };
        Foo.bar = () => {
            console.log(this.car);
        }
    }
    this.car = car;
}
const m = new Foo(3)
m.bar()
m.bar()
Foo(45)
Foo.bar()