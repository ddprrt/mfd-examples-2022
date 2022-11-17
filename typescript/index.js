function do_something(first, ...rest) {
    console.log(first)
    rest.length && do_something(...rest)
}

let collection = [];
for(let i = 0; i < 5; i++) {
    collection.push(Math.floor(Math.random() * 50))
}

//do_something(...collection);

let another_collection = [];
for(let i = 0; i < 2; i++) {
    another_collection.push(Math.floor(Math.random() * 12))
}

console.log(collection);
console.log(another_collection)

const all_lotter_numbers = [...collection, ...another_collection]
console.log(all_lotter_numbers)

const person = { name: "Stefan" }
const profession = { title: "Product Architect (Powerpoint Developer)", area: "Software Engineering" }
const age = NaN

const developer = { ...person, ...profession, age }

function print_developer({ title, name }) {
    console.log(title, name)
}

print_developer(developer)