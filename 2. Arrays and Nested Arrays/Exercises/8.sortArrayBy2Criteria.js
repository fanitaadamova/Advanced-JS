function sortArrayBy2Criteria(array) {
    
    array.sort((a,b) => a.length - b.length || a.localeCompare(b))
    console.log(array.join('\n'));

}
sortArrayBy2Criteria(['alpha', 'beta', 'gamma'])
sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])