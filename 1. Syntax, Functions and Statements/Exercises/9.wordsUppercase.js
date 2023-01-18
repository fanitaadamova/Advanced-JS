function wordsUppercase(string) {

    let result = string.
        match(/[A-z0-9]+/g)
        .join(', ')
        .toUpperCase();

    return result;

}
console.log(wordsUppercase('Hi, how are you?'))
console.log(wordsUppercase('hello'))