function addAndRemoveElements(array) {

    let result = [];
    let counter = 1;

    for (const command of array) {
        switch (command) {
            case 'add': result.push(counter++);
                break;
            case 'remove': result.pop(counter++)
                break;
        }
    }

    if (!result.length) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }

}
addAndRemoveElements(['add', 'add', 'add', 'add'])
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add'])
addAndRemoveElements(['remove', 'remove', 'remove'])