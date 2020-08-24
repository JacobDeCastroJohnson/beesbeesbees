var RetiredForagerBee = function() {

  //Inherit from the ForagerBee Superclass
  ForagerBee.call(this);

  //Overwrite methods from superclass
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';

  //New property
  this.honey1k = 0;

  //Inherited properties
  //this.food = 'jelly';
  //this.eat method
  //this.treasureChest = [];


};

//Set the prototype
RetiredForagerBee.prototype = Object.create(Grub.prototype);

//Delegate constructor pointer
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

//forage method
RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead';
};

//gamble method
RetiredForagerBee.prototype.gamble = function (treasure) {
  this.treasureChest.push(treasure);
};

//Jacob Johnson personal method
RetiredForagerBee.prototype.wealth= function (honeyComb) {
 this.honey1k += honeyComb;
};

