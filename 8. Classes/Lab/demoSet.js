const collection = new Set()

collection.add(7)
collection.add(5)
//не можем да добавяме еднакви стойности
collection.add(5)


console.log(collection);
console.log(`----------has----------`);
console.log(collection.has(3));

console.log(`----------Delete----------`);
console.log(collection);
console.log(collection.delete(5));
console.log(collection);
//имаме size и clear, като Map-a



