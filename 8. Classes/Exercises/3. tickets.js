function tickets(array, sorting) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    for (const line of array) {
        const [destination, price, status] = line.split('|');
        result.push(new Ticket(destination, Number(price), status));
    }

    return result.sort((a, b) => {
        if (typeof a[sorting] === 'number') {
            return a[sorting] - b[sorting];
        } else {
            return a[sorting].localeCompare(b[sorting])
        }
    })

}
console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
))