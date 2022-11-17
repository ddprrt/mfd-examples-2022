class Person {
    name: string; age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let p: object = new Person("Stefan", NaN);
let o: object = {
    name: "Not Stefan",
    age: NaN
}

function do_something_with_person(person: Person) {
    
}

if(p instanceof Person) {
    do_something_with_person(p)
}

function isPerson(p: object): p is Person {
    return p instanceof Person || ("name" in p && "age" in p)
}

if(isPerson(p)) {
    do_something_with_person(p)
}

if(isPerson(o)) {
    do_something_with_person(o)
}