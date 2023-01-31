function add(num) {
    let sum = 0;

    //рекурсивно извикване на функция - ф-ията извиква сама себе си
    function inner(number) {
        sum += number;
        return inner
    }

    inner.toString = () => {
        return sum
    }
    return inner(num)

}
console.log(add(1)(6)(-3).toString());
