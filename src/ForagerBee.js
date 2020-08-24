var ForagerBee = function() {
  //Forager bee in the same inheritance bracket as honeyMakerBee, so it delegates up to the Bee superclass

  Bee.call(this);

  //Overwrite methods from superclass
  this.age = 10;
  this.job = 'find pollen';

  //Inherited from superclass
  //this.color = 'yellow';
  //this.food = 'jelly';

  //New properties for Forager Bee
  this.canFly = true;
  this.treasureChest = [];


};

//Delegate prototype on failed lookups
ForagerBee.prototype = Object.create(Grub.prototype);

//Delegate accurate constructor pointer
ForagerBee.prototype.constructor = ForagerBee;

//Allow a bee to add a treasure to the treasure chest
ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure);
}

