  const path=document.querySelector('#test');
  console.log(path);
//   const attr=path.getAttribute('class'); отримання атрибуту
// const attr=path.setAttribute('data-test','value'); встановлення атрибуту
const attr=path.getAttribute('data-address');
console.log(attr);


const buildItem=document.querySelectorAll('.build-item');
console.log(buildItem);
const cellAddress=document.querySelector('#address');
const cellFlats=document.querySelector('#flats');
const cellFlatsFree=document.querySelector('#flats-free');
const cellFlatsBooking=document.querySelector('#flats-booking');
const cellFlatsSold=document.querySelector('#flats-sold');
console.log(buildItem);//масив даних
buildItem.forEach((object, index )=>{
    object.classList.add('new-class')
    console.log(object);
})