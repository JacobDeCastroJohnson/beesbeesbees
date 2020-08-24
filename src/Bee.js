var Bee = function() {
  //Bee is a subcass of SUPERCLASS Grub and will inherit properties, overwrite properties and add its own unique methods

  //Call the Grub superclass
  Grub.call(this);

  //Overwrite properties uniqe to Bee
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

};
//Allow the bee prototype to delegate failed lookups to Grub.prototype (superclass)
Bee.prototype = Object.create(Grub.prototype);

//Ensure that the constructor property on bee does not inaccurately report the wrong constructor. The code above will automatically point the constructor property of Bee.prototype to the Grub.prototype, so you need to manually change it.
Bee.prototype.constructor = Bee;


