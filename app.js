const transitionPosibilities = [
	"background-color",
	"background-image",
	"background-position",
	"border-color",
	"border-left-color",
	"border-right-color",
	"border-top-color",
	"border-bottom-color",
	"border-radius",
	"color",
	"font-size",
	"text-shadow",
	"width",
	"letter-spacing",
	"caret-color"
	
]

const getRandomNum = () => { 
	return Math.floor(Math.random() * transitionPosibilities.length)
}

let list = document.getElementsByTagName("ul")[0];


// this function gets three properties from the array and shows them on the DOM
function getTransitionPosibilities(){
	list.innerHTML = ""; // this resets the previouslty chosen set of properties
	let properties = [];
	for(let i = 0; i < 3; i++){
		let randomNum = getRandomNum();
		let property = transitionPosibilities[randomNum];
		if(transitionPosibilities.includes(property)){
			properties.push(property)
		};
	} // this for loop gets three random properties from the array nad mushes them to the properties array.
	properties.map(property =>{
		let listItem = document.createElement("li");
		listItem.innerHTML = property;
		list.append(listItem)
	})
}

let btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", getTransitionPosibilities)
