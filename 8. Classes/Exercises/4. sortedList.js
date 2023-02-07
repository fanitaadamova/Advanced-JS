class List {

    constructor() {
        this.result = [];
        this.size = this.result.length;
    }

    add(number) {
        this.result.push(number);
        this.size = this.result.length;
        this.result.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index < this.result.length) {
            this.result.splice(index, 1);
            this.size = this.result.length;
        } else {
            throw new Error('invalid index')
        }
    }

    get(index) {

        if (index >= 0 && index < this.result.length) {
               return this.result[index]
        } else {
            throw new Error('invalid index')
        }
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

