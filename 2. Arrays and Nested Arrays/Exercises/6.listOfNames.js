function listOfNames(array) {
    array
        .sort((a, b) => a.localeCompare(b))
        .forEach((el, i) => {
            console.log(`${i + 1}.${el}`);
        });

}
listOfNames(["John", "Bob", "Christina", "Ema"])

