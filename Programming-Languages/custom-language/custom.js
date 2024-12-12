// for individual character
function identifyCharacter(input) {
	let identity = null;

	const characterMap = {
		LETTER: {
			regex: /[a-zA-Z]/,
			type: "character",
		},
		WHITESPACE: {
			regex: /\s+/,
			type: "emptyCharacter",
		},
		NUMBER: {
			regex: /^[0-9]+$/,
			type: "number",
		},
		OPERATORS: {
			regex: /[-+\/%]/,
			type: "operators",
		},
	};

	const characterCategories = Object.keys(characterMap);

	for (let i = 0; i < characterCategories.length; i++) {
		const category = characterCategories[i];

		const isMatch = characterMap[category].regex.test(input);

		if (isMatch) {
			identity = characterMap[category].type;
			break;
		}
	}

	return identity;
}

// for grouping the charater as tokens aka syntax
function tokenize() {}

function parse() {}

console.log(identifyCharacter(12));
