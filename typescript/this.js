function x() {
    this.a = 2;
}

x()
console.log(globalThis.a)

const person = {}
x.call(person);
console.log(person.a)

const obj = {
    randomizer_value: 100,
    randomize() {
        const collection = [1, 2, 3, 4, 5];
        collection.forEach((el) => {
            console.log(this)
            console.log(el * this.randomizer_value)
        })
    }
}
obj.randomize()