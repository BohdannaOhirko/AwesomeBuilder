const path = document.querySelector("#test");
console.log(path);
//   const attr=path.getAttribute('class'); отримання атрибуту
// const attr=path.setAttribute('data-test','value'); встановлення атрибуту
const attribute = path.getAttribute("data-address");
console.log(attribute);

const buildItem = document.querySelectorAll(".build-item");
console.log(buildItem);
const cellAddress = document.querySelector("#address");
const cellFlats = document.querySelector("#flats");
const cellFlatsFree = document.querySelector("#flats-free");
const cellFlatsBooking = document.querySelector("#flats-booking");
const cellFlatsSold = document.querySelector("#flats-sold");
console.log(buildItem); //масив даних
// buildItem.forEach((object, index, array )=>{
//     object.classList.add('new-class')
//     console.log(object);
// })
// buildItem.forEach((obj, index, arr) => {
// 	obj.addEventListener("mouseover", () => {
// 		const attribute = obj.getAttribute("class");
// 		console.log(attribute + index);
// 	});
// });
const showInfornation = (cell, attr) =>
	buildItem.forEach((obj) => {
		obj.addEventListener("mouseover", () => {
			const value = obj.getAttribute(attr);
			cell.innerText = value;
			
			console.log(cell, attr);
		});


		
	});

showInfornation(cellAddress, "data-address");
showInfornation(cellFlats, "data-flats");
showInfornation(cellFlatsBooking, "data-flats-booking");
showInfornation(cellFlatsFree, "data-flats-free");
showInfornation(cellFlatsSold, "data-flats-sold");

const calcInformation = () =>
	buildItem.forEach((item) => {
		let flats = Number(item.getAttribute("data-flats"));
		let flatsBooking = Number(item.getAttribute("data-flats-booking"));
		let flatsSold = Number(item.getAttribute("data-flats-sold"));
		let flatsFree = flats - (flatsBooking + flatsSold);
		item.setAttribute("data-flats-free", flatsFree);
		const dataFlatsFree = item.getAttribute("data-flats-free");
		// dataFlatsFree === "0" ? (item.classList.add("sold"), item.setAttribute(["data-modal"], 'sold')) : undefined;
		
		if (dataFlatsFree === "0") {
			item.classList.add('sold')
			item.setAttribute('data-modal', 'sold')
			item.addEventListener('click', (event) => {
				event.preventDefault();
			})
		}
	
		
	});

calcInformation();
console.log(typeof null);
// const soldFlats = document.querySelectorAll('[data-flats-free="0"]');
// soldFlats.forEach((item) => item.classList.add("sold"));

// const showNumber = (x, y, z) => {
// 	console.log("Number: ", x, y, z);
// };
// showNumber("value:x", "value:y", "value:z");


// Конструкція else if
// const x = 4

// if (x === 1) {
//     console.log("x едентичен 1");
// } else if (x === 2) {
//     console.log('x  больше либо равен 2');
// } else if (x === 3) {
//     console.log('x  больше либо равен 3');
// } else if (x === 4) {
//     console.log('x  больше либо равен 4');
// } else {
//     console.log("Любой другой случай");
// }