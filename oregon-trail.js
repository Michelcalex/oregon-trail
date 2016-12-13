function makeTraveler(name) {
    return {
        amount: Math.round(Math.random() * 20),
        name: name,
        isHealthy: true,
    }
}

let newTraveler = makeTraveler('lexi');
console.log(newTraveler);




function makeWagon(capacity) {
    return {
        passengers: [],
        capacity: capacity,
    }   
}

let newWagon = makeWagon(5);
console.log(newWagon);




function hunt(traveler) {
    if (Math.random() >= 0.5) {
        traveler.amount += 100;
    }

    return traveler.amount;
}

console.log(hunt(newTraveler));
console.log(newTraveler);



function eat(traveler) {
    traveler.amount -= 20 ;
    if(traveler.amount < 20) {
        traveler.isHealthy = false;
    } 

    return traveler.amount;
}

console.log(eat(newTraveler));
console.log(newTraveler);




 function join(wagon, traveler) { //wagon = newWagon....traveler = new traveler
    //  console.log(wagon.passengers);
     if(wagon.passengers.length < wagon.capacity) {
         wagon.passengers.push(traveler);
     }

     return wagon;
 }

console.log(join(newWagon, newTraveler));


function quarantine(wagon) {
    for(let i=0; i < wagon.passengers.length; i++) {
        if(wagon.passengers[i].isHealthy === false) {
            return true;
        } 
    }
    return false;
}

console.log(quarantine(newWagon));


function food(wagon){
    let totalFood = 0;
    for(let i = 0; i < wagon.passengers.length; i++){
        // console.log(totalFood);
        totalFood += wagon.passengers[i].amount;
        // console.log(totalFood);
    }

    return totalFood;
}

console.log(food(newWagon));


console.log("--------------");
let wagon = makeWagon(5);
let traveler = makeTraveler('Henrietta');
let traveler2 = makeTraveler('Juan');

hunt(traveler); // maybe get more food
eat(traveler2);
eat(traveler2); // juan is hungry
join(wagon, traveler);
join(wagon, traveler2);

console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
console.log(food(wagon)); // print ju