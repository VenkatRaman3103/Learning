const player = {
	nam: "value",
	bar: function () {
		console.log(this.name);
	},
};

const bob = Object.create(player);
// console.log(Object.getPrototypeOf(bob));

function Players(name) {
	this.name = name;
}

Players.prototype.getName = () => {
	return this.name;
};

class PlayersClass {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

const foo = new PlayersClass("some");
// console.log(foo);
