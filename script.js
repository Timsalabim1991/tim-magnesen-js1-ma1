// question 1
const cat = {
	complain: "Meow!"
};

console.log(cat.complain);

// question 2
const heading = document.querySelector("h3").innerHTML = "Updated heading";

// question 3
heading.style.fontSize = "2em"

// question 4
const heading = document.querySelector("h3");

console.dir(heading.classList);

heading.classList.add("subheading");

// question 5
const listItems = document.querySelectorAll("p");

console.log(listItems);

for(let i = 0; i < listItems.length; i++) {
	console.dir(listItems[i].innerHTML);

	listItems[i].style.color ="red";
}

// question 6
const resultsContainer = document.querySelector("results").innerHTML= "<p>New paragraph</p>";

// question 7


// question 8
