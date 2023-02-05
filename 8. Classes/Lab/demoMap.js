const collection = new Map();
console.log(collection);

collection.set('Anna', '+41 522 631')
collection.set('Peter', '+41 287 252')
console.log(collection);
//достъпване на елемент
console.log(collection.get('Anna'));

for (const entry of collection) {
    console.log(entry);
}

//превръщане на масив от масиви
console.log(`----------Make map in an Array of arrais----------`);
const astArray = [...collection.entries()]
console.log(astArray);

//превръщане в обект
console.log(`----------Make map in an Object----------`);
const astObject = Object.fromEntries([...collection.entries()])
console.log(astObject);
console.log(`----------has----------`);
//проверка дали нещо съществува
console.log(collection.has('Anna'));
console.log(collection.has('Mery'));

//проверка за размера - това своество го има само Map
console.log(collection.size);

//Не  е масив, ако искаме да е масив от масиви(key,value )ползваме един от долните два примера
console.log([...collection.entries()]);
console.log(Array.from(collection.entries()));

//Един итератор може да го обходим само веднъж
const entries = collection.entries()
console.log(entries);

//Итераторите могат да се обхождат с for-of, при което се консумират
const entriesSecond = collection.entries()
console.log(`----------First acess----------`);
for (const entry of entriesSecond) {
    console.log(entry);
}
console.log(`----------Second acess----------`);
for (const entry of entriesSecond) {
    console.log(entry);
}





