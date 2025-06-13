function tickets(array, sortBy) {
    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        static sort(arr, criteria) {
            return arr.sort((a, b) => {
                return criteria === "price" ?
                    a[criteria] - b[criteria] :
                    a[criteria].localeCompare(b[criteria])
            });
        }
    };
    for (const el of array) {
        let [destination, price, status] = el.split('|');
        let ticket = new Ticket(destination, Number(price), status);
        tickets.push(ticket);
    }

    return Ticket.sort(tickets, sortBy);
}

tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')