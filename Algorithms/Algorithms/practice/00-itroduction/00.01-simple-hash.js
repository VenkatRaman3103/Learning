function simpleHash(str) {
	for (let i = 0; i < str.length; i++) {
		let key = str[i];
		console.log(key.charCodeAt());
	}
}

const str = "abc";
// simpleHash(str);

// TODO: hashing the alphabet and retrieving the value
function alphabetHash() {
	let start = "a".charCodeAt();
	let end = "z".charCodeAt();

	for (let i = start; i < end + 1; i++) {
		console.log(String.fromCharCode(i));
	}
}
alphabetHash();

// TODO: hasing a word and retrieving it
