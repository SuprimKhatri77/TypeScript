import { error } from "console"

type Pizza = {
    id: number
    name: string
    price: number
}

type status = "ordered" | "completed" 

type Order = {
        id: number
        pizza: Pizza
        status: status
}


const menu: Pizza[] = [
    {
        id: 1,
        name: "Margheritta",
        price: 8
    },
    {
        id:2,
        name: "Pepperoni",
        price: 10
    },
    {
        id:3,
        name: "Hawaiian",
        price: 10
    },
    {
        id:4,
        name: "Veggie",
        price: 9
    },
]


let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Order[] = []


function addNewPizaa(pizzaObj: Pizza) : void{
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) : Order | undefined{
    const selectedPizza =  menu.find((pizzaObj)=> pizzaObj.name === pizzaName)
    if(!selectedPizza){
        console.error(`${pizzaName} does not exist in the menu`)
        throw new Error()
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = {id:nextOrderId++,pizza: selectedPizza, status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) : Order | undefined{
    const order = orderQueue.find(order => order.id === orderId)
    if(!order){
        console.error(`${orderId} not found`)
        return
    } 
    order.status = 'completed'
    return order
}

// type identifier = Pizza["name"] | Pizza["id"]

 function getPizzaDetail(identifier: string | number ) : Pizza {
    const pizza = menu.find((pizzaObj) => pizzaObj.name === identifier || pizzaObj.id === identifier);

     if(!pizza){
        throw new Error(`pizza with identifier "${identifier}" not found`)
     }
     return pizza
   
}

console.log(getPizzaDetail("Pepperoni"))
// console.log(getPizzaDetail("Non existent pizza"))


// addNewPizaa({id:5, name:"Chicken Pizza", price: 22})
// addNewPizaa({id:6, name:"BBQ Chicken", price: 12})
// addNewPizaa({id:7, name:"Spicy sausage", price: 11})


// placeOrder("Chicken Pizza")
// completeOrder(1)


// console.log("Menu: ", menu);
// console.log("Cash in register: ", cashInRegister)
// console.log("Order queue: ", orderQueue);


