function createSortedList() {
    let collection = []

    const object = {
        add,
        remove,
        get,
        size: 0

    }

    return object

    function add(number) {
        collection.push(number);
        collection.sort((a, b) => a - b)
        object.size ++;
    }


    function remove(index) {
        if (index >= 0 && index < collection.length) {
            collection.splice(index, 1)
            collection.sort((a, b) => a - b)
            object.size --;
        }
    }

    function get(index) {
        if (index >= 0 && index < collection.length) {
            return collection[index]
        }
    }

}




let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
