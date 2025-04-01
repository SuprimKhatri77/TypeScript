type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}


let person1: Person = {
    name: "Joe",
    age: 17,
    isStudent: true,
}


let person2: Person = {
    name: "Joe",
    age: 17,
    isStudent: true,
    address: {
        street: "1234 Main",
        city: "Anytown",
        country: "AnyCountry"
    }
}



// function displayInfo(person1){
//     console.log(`${person1.name} lives at ${person1.address?.street}.`);
    
// }


let people: Person[] = [person1,person2]
console.log(people);
