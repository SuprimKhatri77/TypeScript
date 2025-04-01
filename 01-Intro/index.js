const menu = [
    {
        name: "Margheritta",
        price: 8
    },
    {
        name: "Pepperoni",
        price: 10
    },
    {
        name: "Hawaiian",
        price: 10
    },
    {
        name: "Veggie",
        price: 9
    },
]


const nextOrderId = 1
const cashInRegister = 100
const orderQueue = []


function addNewPizaa(pizzaObj){
    menu.push(pizzaObj)
}

function placeOrder(pizzaName){
    const selectedPizza =  menu.find((pizzaObj)=> pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = {id:nextOrderId++,pizza: selectedPizza, status: ordered}
    return newOrder
}

function completeOrder(orderId){
    const order = orderQueue.find(order => order.id === orderId)
    order.status = 'completed'
    return order
}


addNewPizaa({ name:"Chicken Pizza", cost: 22})
addNewPizaa({ name:"BBQ Chicken", cost: 12})
addNewPizaa({ name:"Spicy sausage", cost: 11})


placeOrder("Chicken Pizza")
completeOrder("1")


console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister)
console.log("Order queue: ", orderQueue);


