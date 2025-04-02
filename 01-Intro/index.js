"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
];
let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];
function addNewPizaa(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        throw new Error();
    }
    cashInRegister += selectedPizza.price;
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId);
    if (!order) {
        console.error(`${orderId} not found`);
        return;
    }
    order.status = 'completed';
    return order;
}
addNewPizaa({ name: "Chicken Pizza", price: 22 });
addNewPizaa({ name: "BBQ Chicken", price: 12 });
addNewPizaa({ name: "Spicy sausage", price: 11 });
placeOrder("Chicken Pizza");
completeOrder(1);
console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);


