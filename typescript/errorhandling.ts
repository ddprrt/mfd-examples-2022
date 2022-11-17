function x(): never | number {
    throw new Error("")
}

try {
   
} catch(error: unknown) {

}

let z =  x()

type Person = {
    name: string
}

declare const a: { name: string, age: number}

function do_something_with_person(p: Person) {

}
do_something_with_person(a)


export {}