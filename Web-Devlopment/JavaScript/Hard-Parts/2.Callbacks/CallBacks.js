// challenge: 1
function addTwo(num) {
	return num + 2;
}

// challenge: 2
function adds(word) {
	return word + "s";
}

// challenge: 3
function map(array, callbackFunction) {
	let temp = [];

	for (let i = 0; i < array.length; i++) {
		temp.push(callbackFunction(array[i]));
	}

	console.log("hello world");

	return temp;
}

const multipleByTwo = (num) => num * 2;

const challenge3 = map([1, 2, 3, 4], multipleByTwo);
console.log(challenge3);

// challenge: 4
function forEach(array, callbackFunction) {
	for (let i = 0; i < array.length; i++) {
		updateString(array[i]);
	}
}

let string = "";

const updateString = (char) => (string += char);

forEach(["a", "b", "c", "d"], updateString);

console.log(string);

// challenge: 5
function mapWith(array, callbackFunction) {
	let tempArray = [];

	array.forEach((element) => {
		tempArray.push(callbackFunction(element));
	});

	return tempArray;
}

const multipleByThree = (num) => num * 3;

const challenge5 = mapWith([1, 2, 3, 4, 5], multipleByThree);
console.log(challenge5, "challenge5");

// challenge: 6
const reduce = (array, callbackFunction, initialValue) => {
	for (let i = 0; i < array.length; i++) {
		initialValue = initialValue + callbackFunction(array[i]);
	}
	return initialValue;
};

const reducer = (num) => num + 2;

const challenge6 = reduce([1, 2, 3, 4, 5], reducer, 0);
console.log("challenge6: ", challenge6);

// challenge: 7
const intersection = (arrays) => {
	let repeatedElements = arrays[0];

	for (let i = 1; i < arrays.length; i++) {
		repeatedElements = repeatedElements.filter((element) =>
			arrays[i].includes(element),
		);
	}

	return repeatedElements;
};

const challenge7 = intersection([
	[1, 2, 3, 4],
	[1, 5, 2, 3, 8],
	[1, 2, 10, 11],
]);
console.log("challenge7:", challenge7);

const set = {};

if (set[0]) {
	console.log("hello world");
}

// challenge: 8
function union(arrays) {
	let hashTable = {};

	let nonRepeatingElement = [];

	// for (let i = 0; i < arrays.length; i++) {
	//     const array = arrays[i]

	//     for (let j = 0; j < array.length; j++) {
	//         const element = array[j]

	//         if(!nonRepeatingElement.includes(element)){
	//             nonRepeatingElement.push(element)
	//         }
	//     }
	// }

	const result = arrays.reduce((acc, array) => {
		array.forEach((element) => {
			let isExist = false;

			for (let i = 0; i < acc.length; i++) {
				if (element == acc[i]) {
					isExist = true;
				}
			}

			if (!isExist) {
				acc.push(element);
			}
		});
		return acc;
	}, []);

	return result;
}

const challenge8 = union([
	[5, 10, 15, 20],
	[15, 88, 1, 5, 7],
	[1, 10, 15, 5, 20],
]);
console.log("challenge8", challenge8);

// challenge9
function objOfMap(array1, array2, callback) {
	let result = {};

	const n = array1.length;

	for (let i = 0; i < n; i++) {
		let upperCased = callback(array1[i]);

		if (upperCased == array2[i]) {
			result[array1[i]] = array2[i];
		}
	}

	return result;
}

function callback(string) {
	return string.toUpperCase();
}

const challenge9 = objOfMap(
	["hi", "howdy", "bye", "later", "hello"],
	["HI", "Howdy", "BYE", "LATER", "hello"],
	callback,
);

console.log(challenge9, "challenge9");

// challenges: 10
function multipleMap(array, callbacks) {
	let result = {};

	for (let i = 0; i < array.length; i++) {
		const element = array[i];

		result[element] = [];

		for (let j = 0; j < callbacks.length; j++) {
			const callback = callbacks[j];

			result[element].push(callback(element));
		}
	}

	return result;
}

function changeToUpperCase(string) {
	return string.toUpperCase();
}

function changeToCamelCase(string) {
	return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function changeToLowerCase(string) {
	return string.toLowerCase();
}

const challenge10 = multipleMap(
	["catfood", "glue", "beer"],
	[changeToUpperCase, changeToCamelCase, changeToLowerCase],
);
console.log(challenge10);

// challenge: 11
function objectFilter(obj, callback) {
	let result = {};

	Object.keys(obj).map((key) => {
		const upperCased = callback(key);

		if (upperCased == obj[key]) {
			result[key] = upperCased;
		}
	});

	return result;
}

const cities = {
	London: "LONDON",
	LA: "Los Angeles",
	Paris: "PARIS",
};

const challenge11 = objectFilter(cities, (string) => string.toUpperCase());
console.log(challenge11, "challenge11");

// challenge: 12
function majority(array, callback) {
	let majorityCounter = { numberOfTrues: 0, numberOfFalse: 0 };

	for (let i = 0; i < array.length; i++) {
		const element = array[i];

		if (callback(element)) {
			majorityCounter.numberOfTrues++;
		} else {
			majorityCounter.numberOfFalse++;
		}
	}

	return majorityCounter.numberOfTrues > majorityCounter.numberOfFalse;
}

function isOdd(element) {
	return element % 2 == 1;
}

const challenge12 = majority([2, 3, 4, 5], isOdd);
console.log(challenge12);

// challenge: 13
function priority(array, callback) {
	let wordsWithS = [];

	for (let i = 0; i < array.length; i++) {
		const word = array[i];

		if (callback(word)) {
			wordsWithS.push(word);
		}
	}

	for (let j = 0; j < array.length; j++) {
		const remainingWord = array[j];

		if (!wordsWithS.includes(remainingWord)) {
			wordsWithS.push(remainingWord);
		}
	}

	return wordsWithS;
}

function isStartWithS(string) {
	return string[0] == "s" || string[0] == "S";
}

const challenge13 = priority(
	["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
	isStartWithS,
);
console.log(challenge13);

function countBy(array, callback) {
	let result = {};

	for (let i = 0; i < array.length; i++) {
		const element = callback(array[i]);

		if (result[element]) {
			result[element]++;
		} else {
			result[element] = 1;
		}
	}

	return result;
}

function checkOdd(num) {
	if (num % 2 == 0) {
		return "even";
	} else {
		return "odd";
	}
}

const challenge14 = countBy([2, 1, 3, 5, 6], checkOdd);
console.log(challenge14, "challenge14");

function functionName() {
	for (let i = 0; arr.length; i++) {
		console.log("hell world");
	}
}

// challenge: 15
function groupBy(array, callback) {
	let groupedObj = {};

	for (let i = 0; i < array.length; i++) {
		const element = array[i];

		const result = callback(element);

		if (groupedObj[result]) {
			groupedObj[result].push(element);
		} else {
			groupedObj[result] = [];
			groupedObj[result].push(element);
		}
	}

	return groupedObj;
}

function roundTheNumber(num) {
	return Math.floor(num);
}

const challenge15 = groupBy(
	[1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4],
	roundTheNumber,
);
console.log(challenge15, "challenge15");

// challenge: 16
function goodKeys(obj, callback) {
	let returnArray = [];

	Object.keys(obj).map((item) => {
		if (callback(obj[item])) {
			returnArray.push(item);
		}
	});

	return returnArray;
}

function startWithBird(word) {
	return word.slice(0, 4).toLowerCase() == "bird";
}

const challenge17 = goodKeys(
	{
		mac: "priest",
		dennis: "calculating",
		charlie: "birdlaw",
		dee: "bird",
		frank: "warthog",
	},
	startWithBird,
);
console.log(challenge17, "challenge17");

// challenge: 18
function objFilter(obj, callback) {
	let returnObj = {};

	Object.keys(obj).map((key) => {
		const value = obj[key];

		const dividedKey = callback(key);

		if (dividedKey == value) {
			returnObj[key] = value;
		}
	});

	return returnObj;
}

function half(num) {
	return num / 2;
}

const challenge18 = objFilter({ 6: 3, 2: 1, 12: 4 }, half);
console.log(challenge18, "challenge18");

// challenge: 19
function rating(arrayOfFunction, val) {
	let counter = 0;

	for (let i = 0; i < arrayOfFunction.length; i++) {
		const getFunction = arrayOfFunction[i];

		const result = getFunction(val);

		if (result) {
			counter++;
		}
	}

	return (counter / arrayOfFunction.length) * 100;
}

// list of function that return a boolean
const isEven = (num) => num % 2 === 0;
const greaterthanFour = (num) => num > 4;
const isSquare = (num) => Math.sqrt(num) % 1 === 0;
const hasSix = (num) => num.toString().includes("6");

const challenge19 = rating([isEven, greaterthanFour, isSquare, hasSix], 66);
console.log(challenge19, "challenge19");

//challenge: 20
function pipe(functionsArr, value) {
	const result = functionsArr.reduce((acc, fun) => fun(acc), value);
	return result;
}

// list of function
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];

const challenge20 = pipe(capAddlowRepeat, "cat");

console.log(challenge20, "challenge20");

// challenge: 21
function highestFunction(objOfFuncs, subject) {
	let highestValue = 0;

	let returnKey;

	Object.keys(objOfFuncs).map((key) => {
		const getFunction = objOfFuncs[key];

		const result = getFunction(subject);

		if (result > highestValue) {
			highestValue = result;
			returnKey = key;
		}
	});

	return returnKey;
}

const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;

const challenge21 = highestFunction(groupOfFuncs, -20);
console.log(challenge21, "challenge21");

// challenge: 22
function combineOperations(value, arrOfFunctions) {
	return arrOfFunctions.reduce((acc, fun) => fun(acc), value);
}

function add100(num) {
	return num + 100;
}

function divByFive(num) {
	return num / 5;
}

function multiplyByThree(num) {
	return num * 3;
}

console.log(combineOperations(0, [add100, divByFive, multiplyByThree]));
