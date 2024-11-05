# `new` keyword

```js
function createUser(name, address) {
	this.name = name;
	this.address = address;
} //-> combo of function and the object

const user1 = new createUser("foo", "bar");
```

1. create an empty object and assign it to the `this` keyword

```js
// inside the local memory
this: {} //-> this will also has the __proto__ like all other object

```

2. link the `__proto__` to the `createUser.prototype` object

3. returns the `this` object
