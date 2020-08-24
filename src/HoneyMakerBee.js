var HoneyMakerBee = function() {

  //Call the Bee class
  Bee.call(this);

  this.age = 10;
  this.job = 'make honey';
  // this.color; --> inherited from bee
  // this.food; --> inherited from bee
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}


