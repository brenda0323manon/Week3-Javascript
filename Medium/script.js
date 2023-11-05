shareEqually()

function shareEqually (pizzaSlices, numberOfPeople) {
     const slicesPerPerson = Math.round(pizzaSlices / numberOfPeople);
     return `Each person gets ${slicesPerPerson }; from our ${pizzaSlices} slices pizza.`;
}

// examples
// console.log(shareEqually(10,3));
// console.log(shareEqually(80,8))

