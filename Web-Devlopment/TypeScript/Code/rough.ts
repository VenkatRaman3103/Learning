// let a = 12;
//
// const b = [ 24 ];
// b.push(3)
//
// let c = [12] as [12]

// const changable = [1];
// changable.push(2); // does not throws any errors
//
// let unchangable = [1] as [1]; // [1] is type in here
// // unchangable.push(2); // throws an error
//
// let unchangable1 = [3] as const;

// type nameType = string;
// type addressType = string;
//
// const user: nameType = "foo";
// const address: nameType = "bar"; // used nameType for address
//
// function formatName(name: nameType): addressType {
// 	return name;
// }
//
// formatName(user);
// formatName(address); // passing the wrong argument
// // it does not  throws an error

type nameType = string;
type addressType = string;

const user = "foo" as nameType;
const address = "bar" as addressType; // used nameType for address

function formatName(name: nameType): nameType {
	return name;
}

formatName(user);
formatName(address); // passing the wrong argument
// it does not  throws an error
