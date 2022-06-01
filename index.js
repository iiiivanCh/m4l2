"use strict";


const productName = prompt("Назовите наименование товара");
console.log(productName);
const productAll = +prompt("Назовите количество товара");
console.log(productAll);
const productCategory = prompt("Назовите категорию товара");
console.log(productCategory);
const productPrice = prompt("Назовите цену товара");
console.log(productPrice);
console.log(typeof productAll);
console.log(typeof productPrice);
const productTotal = productAll * Number(productPrice);
console.log(`на складе ${productAll} единицы товара \"${productName}\" на сумму ` + productTotal + " условных единиц");


