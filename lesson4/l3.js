
//let titleProject = 'Оценка стоиости';
//console.log(titleProject);
//console.log(typeof titleProject);
/*let screensValue = 'шаблонные, с уникальным дизайном, с анимациями';
console.log(screensValue);
let screenPrice = 100;
console.log(screenPrice);
console.log(typeof screenPrice);
let percentage = 20;
console.log(percentage);
let fullPrice = 1000;
let responsive = true;
if (responsive) {
    console.log('good');
} else {
    console.log('bad');
}
console.log(typeof responsive);*/


let project = prompt('Название проекта?');
console.log(project);
let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');
console.log(screensValue);
let responsive = confirm ('Нужен ли адаптив');
let service1 = prompt('Какой сервис Вам нужен?');
let servicePrice1 = +prompt('СКолько это будет стоить?');
let service2 = prompt('Какой еще сервис нужен?');
let servicePrice2 = + prompt ( 'Сколько будет стоить второй сервис?');
let screenPrice = 1000;
let percentage = 0.15;
let fullPrice = servicePrice1 + servicePrice2 + screenPrice;
let servicePercentPrice =  Math.round(fullPrice * 0.15);
let totalPriceForMe = fullPrice - servicePercentPrice;
if (fullPrice > 50000) {
    console.log('скидка в 10%');
} else if (fullPrice >20000 && fullPrice <= 50000) {
    console.log ('Скидка в 5%');
} else if (fullPrice < 20000 ){ 
   console.log('Скидки нет'); 
} else {
console.log('Что-то пошло не так');
};
console.log("Общая стоимость проекта: " + fullPrice);
console.log("Итоговая сумма за вычетом процента : " + totalPriceForMe);