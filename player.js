console.log('player file is loaded');
const { Tamagotchi } = require("./tamagotchi.js")
//const Tamagotchi = TamagotchiObj.Tamagotchi


var player = {
  name: "Neo",
  feedTamagotchi: function(tamagotchi) {
    tamagotchi.foodInTummy++;
    console.log('YUM!!! ' + tamagotchi.name + ' has been fed and now has: ' + tamagotchi.foodInTummy + ' in the tummy');
  },
  medicateTamagotchi: function(tamagotchi) {
    tamagotchi.health++;
    console.log(tamagotchi.name + ' has been medicated and now has health: ' + tamagotchi.health);
  },
  knockOutTamagotchi: function(tamagotchi) {
    tamagotchi.restedness++;
    console.log(tamagotchi.name + ' got some Zzzzs! Restedness: ' + tamagotchi.restedness);
  }
}; //end player


const Pink = new Tamagotchi("Pink","bunny")
console.log(Pink)

player.feedTamagotchi(Pink)
player.medicateTamagotchi(Pink)
player.knockOutTamagotchi(Pink)