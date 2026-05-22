"use strict"
//product identification
const card = {
    firstName : '8ply multicoloured',
    price : 5,
};
const card2={
    secondName : 'fux-fur',
    price2 : 2,
};
const card3={
    secondName : 'fingerloop',
    price3 : 3,
};
const card4={
    fourthName : 'metallic yarn',
    price4: 4,
}
const card5={
    fifthName: 'mohair-multicoloured',
    price5: 5,
}
const card6={
    sixthName: '5ply multicoloured',
    price6: 6,
}
const card7={
    seventhName: 'Tube',
    price7: 7,
}
const card8={
    eightName: 'Ergonomic hook',
    price8: 8,
}
const card9={
    nineName: 'aluminium hook',
    price9: 9,
}

const name = document.getElementById("name");
name.innerText=card.firstName;

const price=document.getElementById("demo");
price.innerText=card.price;


const name2 = document.getElementById("name2");
name2.innerText=card2.secondName;

const price2=document.getElementById("demo2");
price2.innerText=card2.price2;


const name3 = document.getElementById("name3");
name3.innerText=card3.secondName;

const price3 = document.getElementById("demo3")
price3.innerText=card3.price3;


const name4 = document.getElementById("name4");
name4.innerText=card4.fourthName;

const price4 = document.getElementById("demo4");
price4.innerText=card4.price4;


const name5 = document.getElementById("name5");
name5.innerText=card5.fifthName;

const price5 = document.getElementById("demo5");
price5.innerText=card5.price5;


const name6 = document.getElementById("name6");
name6.innerText=card6.sixthName;

const price6 = document.getElementById("demo6");
price6.innerText=card6.price6;


const name7 = document.getElementById("name7");
name7.innerText=card7.seventhName;

const price7 = document.getElementById("demo7");
price7.innerText=card7.price7;


const name8= document.getElementById("name8");
name8.innerText=card8.eightName;

const price8= document.getElementById("demo8")
price8.innerText=card8.price8;


const name9= document.getElementById("name9");
name9.innerText=card9.nineName;

const price9= document.getElementById("demo9");
price9.innerText=card9.price9;


//changing of add to cart
const addNewCart = document.querySelectorAll('#addCart');
Array.from(addNewCart).forEach(function(addNewCart){
    addNewCart.addEventListener('click', function(i){
        addNewCart.outerHTML= '<div class="flex gap-5 bg-amber-700 w-30 px-5 py-2 rounded-full relative bottom-5 left-7"><button class="cursor-pointer"><img class="border border-gray-300 rounded-full h-4 w-4" src="./img/icon-decrement-quantity.svg" alt="decrease icon"></button><p>1</p><button class="cursor-pointer"><img class="border border-gray-300 rounded-full h-4 w-4" src="./img/icon-increment-quantity.svg" alt="increase icon"></button></div>';
    });  
});








//to push product to empty array
const order = [];
order.push (card, card2, card3);
console.log(order)

//adding prices to get total price
const totalCard = card.price + card2.price2 + card3.price3;
console.log(totalCard);

function total(a, b){
    a = card.price;
    b = card2.price2;
    console.log(a + b)
}
total()

card.addEventListener(click, function(){

 })