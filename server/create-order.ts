import {
    Coffee 

} from "./resources/coffee.resource"

import{
    Order
} from "./resources/order.resource";

import fs from "fs";
import path from "path";
import {v4 as uuidv4} from "uuid";

 const filePath = path.join(process.cwd(), "orders","orders.json");

 function createCoffee (coffeeSmol:Partial<Coffee>){
    if (coffeeSmol.coffeeBeans!== undefined){
        const newCoffee : Coffee = {
    coffeeBeans:coffeeSmol.coffeeBeans , iceed:coffeeSmol.iceed ?? false ,milk:coffeeSmol.milk,sugar:coffeeSmol.sugar ??0 , syrups:coffeeSmol.syrups
    }  ;
    return newCoffee;

    }
    
   console.log("order error");
   return;
 }
 function createOrder (OrderCoffee:Coffee ){
    const order : Order ={
       id:uuidv4(), dateOfcreation:new Date().toDateString(),coffee:OrderCoffee
       
    }
    return order;
 }

 function makeToOrder (Coffee:Partial< Coffee>){
    const createdCoffee =createCoffee(Coffee)
    const oreder =createOrder(Coffee);
    return oreder;

 }
  