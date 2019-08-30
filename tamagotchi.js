console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor() {
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }

    cry() {
        this.foodInTummy--;
        console.log("The Tamagotchi is crying!!! WAAAH!!!!!!");
        console.log('current food in tummy: ' + this.foodInTummy);
    }
}

//create new Tamagotchis
let Pink = new Tamagotchi()

let Blue = new Tamagotchi()

//test out your Tamagotchies below via console.logs
console.log("Tamagotchi")

console.log(Pink)
console.log(Blue)

console.log(Pink.cry())
console.log(Blue.cry())