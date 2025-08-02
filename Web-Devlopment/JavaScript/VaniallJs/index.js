const body = document.getElementsByTagName("body")[0];

const navLinks = Array.from(document.getElementsByClassName("nav-item"));
console.log(navLinks);

for (let i = 0; i < navLinks.length; i++) {
	const navLink = navLinks[i];
	const anchorLink = navLink.querySelector("a");

	anchorLink.innerText = i + 1;
}

const navigationWrapper = document.querySelector(".navigation-wrapper");

for (let i = 0; i < 6; i++) {
	const newElement = document.createElement("li");
	newElement.innerText = i + navLinks.length;

	navigationWrapper.prepend(newElement);
}

const title = document.getElementById("main-title");
title.innerText = "Hello world";
