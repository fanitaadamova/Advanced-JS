function argumentInfo() {
    // така взимаме всички аргументи и ги парсваме към масив
    const data = Array.from(arguments);

    let object = {};

    for (const elem of data) {
        let type = typeof elem
        console.log(`${type}: ${elem}`);

        if (!object.hasOwnProperty(type)) {
            object[type] = 1;
        } else {
            object[type] += 1;
        }
    }

    let entries = Object.entries(object).sort((a,b) => b[1] - a[1]);

    for (const [type, count] of entries) {
        console.log(`${type} = ${count}`);
    }

}
argumentInfo('cat', 42, 32, function () { console.log('Hello world!'); }) 