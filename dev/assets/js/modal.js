const modal = document.querySelector(".modal");
const triger = document.querySelectorAll("[data-triger-modal]");
const modalBody = document.querySelector(".modal-body");

// const cats = [
// 	{
// 		name: "Vasya",
// 		color: "red",
// 		age: 3,
// 	},
// 	{
// 		name: "Murka",
// 		color: "white",
// 		age: 7,
// 	},
// 	{
// 		name: "Viskas",
// 		color: "green",
// 		age: 4,
// 	},
// ];
// console.log(cats[0].name);
const modalArr = [
	{
		id: "sold",
		title: "Нажаль всі квартири продані..(",
		description:
			"Вільні квартири знаходяться в будинках, які не продані. Оберіть, будь ласка, іншу будівлю, щоб переглянути квартири своєї мрії!)",
	},

	{
		id: "loginSuccess",
		markup: `
          <form class="form">
            <h4 class="form-title">Залишились питання? Напишіть нам!)</h4>
            <div class="form-column">
                <label for="name">Name</label>
                <input id="name" type="text">
            </div>
            <div class="form-column">
                <label for="tel">Telephone</label>
                <input id="tel" type="tel">
            </div>
            <div class="form-column">
                <label for="answer">You'r answer</label>
                <textarea id="answer"></textarea>
            </div>
            <button class="btn btn-secondary" type="submit" data-close="modal">Ok</button>
            <button class="btn btn-close" data-close="modal"></button>
       </form>`,
	},
	{
		id: "registrationSuccess",
		title: "Успішна реєстрація",
		description: "Ви успішно зареєструвалися.",
	},
];
triger.forEach((item) => {
	item.addEventListener("click", function () {
		const modalType = item.getAttribute("data-triger-modal");
		showModal(modalType);
		/* 1. Отримати значення атрибуту data-triger-modal по кліку на кнопку 
       2. Викликати ф-ю showModal і вкласти в її аргументи data-attr --> showModal(modalType)
    */
	});
});
function showModal(modalType) {
	const modalData = modalArr.find((item) => item.id === modalType);
	if (modalData) {
		// console.log(modalData.description);
		randerModalContent(modalData);
		modal.classList.add("show");
	}
}
/*
        1. Получить нужный объект из массива при помощи .find
        2. В параметры функции randerModalContent передаём объект из массива 
    */
function randerModalContent(modalData) {
	if (modalData.markup) {
		modalBody.innerHTML = modalData.markup;
		console.log(true);
	} else {
		modalBody.innerHTML = `<h4 id="title">${modalData.title}</h4>
                        <p>${modalData.description}</p>
                        <div class="btn-row">
                        <button class="btn btn-primary" data-close="modal">Ок</button>
                        <button class="btn btn-close" data-close="modal"></button>
                        </div`;
		console.log(false);
	}
}
 /*
        если у объекта есть ключ markup, тогда мы рендерим html который в значении ключа
        иначе, мы рендерим шаблон в котором подставленны переменные
    */
const trigerClose = document.querySelectorAll('[data-close="modal"]')
console.log(trigerClose);
function closeModal() {
	modal.classList.remove("show");
}
// const modal = document.querySelector(".modal");
// const trigerSold = document.querySelectorAll('[data-modal="sold"]');
// function showModal() {
// 	modal.classList.add("show");
// }

// trigerSold.forEach((triger) => {
// 	triger.addEventListener("click", showModal);
// });
trigerClose.forEach(triger => {
	triger.addEventListener("click", closeModal);
});
modal.addEventListener("click", (event) => {
	event.target.classList.remove("show");
});
