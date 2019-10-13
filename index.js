let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

/*  function getAge(pet) {
  return new Date().getFullYear() - pet.bornOn;
}*/
const getAge = pet => new Date().getFullYear() - pet.bornOn;
//let petsWithAge = [];
/*for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  pet.age = getAge(pet);

  petsWithAge.push(pet);
}
*/
let petsWithAge = pets.map(pet =>{
  pet.age = getAge(pet);
    //console.log(pet);
   return pet;
});

console.log(petsWithAge, 'ggg');

/*let dogs = [];
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.type === "dog") {
    dogs.push(pet);
  }
}*/
//first essay
//let dogs = pets.filter(pet=>{return pet.type === "dog"});
let dogs = pets.filter(pet=>(pet.type === "dog"));



console.log(dogs, 'rr');

/*var jasper;
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.name === "Jasper") {
    jasper = pet;
  }
}*/
let jasper = pets.find(pet =>  (pet.name === "Jasper"));

console.log(jasper, 'oo');
console.log(`Jasper is  ${jasper.age}  years old`);