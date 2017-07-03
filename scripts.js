var iPhone6s = new Phone("Apple", 2250, "silver", "iOS");
var GalaxyS6 = new Phone("Samsung", 1300, "black", "Android");
var OnePlusOne = new Phone("OnePlus", 1900, "pink", "Android");

function Phone(brand, price, color, system) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.system = system;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + " color is " + this.color + " the price is " + this.price + " and the system is " + this.system + ".");
}

iPhone6s.printInfo();
GalaxyS6.printInfo();
OnePlusOne.printInfo();