function solve(arr) {

    let resultArr = [];
    let counter = 0;

    const commands = {
        'add': (counter) => resultArr.push(counter),
        'remove': () => resultArr.pop(),
    };

    for (let currentCommand of arr) {
        counter++;
        if (currentCommand == 'add') {
            //извиквам функцията
            commands['add'](counter)
        } else {
            commands['remove']();
        }
    }

    if (resultArr.length == 0) {
        console.log('Empty');
    } else {
        for (element of resultArr) {
            console.log(element);
        }
    }
}

solve(['add',
    'add',
    'add',
    'add']
);

solve(['add',
    'add',
    'remove',
    'add',
    'add']
);

solve(['remove',
    'remove',
    'remove']
);