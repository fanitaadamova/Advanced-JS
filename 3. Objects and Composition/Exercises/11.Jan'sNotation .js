function solve(array) {

    let nums = [];

    const operands = {
        '+': (a, b) => b + a,
        '-': (a, b) => b - a,
        '*': (a, b) => b * a,
        '/': (a, b) => b / a

    }

    for (const element of array) {
        if (typeof element == 'number') {
            nums.push(element)
        } else {

            if (nums.length < 2) {
                return console.log(`Error: not enough operands!`);
            }

            let a = nums.pop();
            let b = nums.pop();
            nums.push(operands[element](a, b));
        }
    }

    if (nums.length !== 1) {
        console.log(`Error: too many operands!`);
    } else {
        console.log(nums[0]);
    }

}
solve([5, 3, 4, '*', '-'])
solve([3, 4, '+'])
solve([7, 33, 8, '-'])
solve([15, '/'])