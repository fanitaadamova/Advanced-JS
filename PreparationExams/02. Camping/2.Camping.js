class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.")
        }
        for (const object of this.listOfParticipants) {
            //проверявам стойността на name(value)
            if (object.name === name) {
                return `The ${name} is already registered at the camp.`
            }
        }
        if (Number(money) < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 })
        return `The ${name} was successfully registered.`

    }

    unregisterParticipant(name) {
        for (const object of this.listOfParticipants) {
            //проверявам стойността на name(value), дали е равна на стойността в подадената променлива
            if (object.name === name) {
                let indexOfObj = this.listOfParticipants.indexOf(object);
                this.listOfParticipants.splice(indexOfObj, 1)
                return (`The ${name} removed successfully.`)
            }

            throw new Error(`The ${name} is not registered in the camp.`)
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        if (typeOfGame === "WaterBalloonFights") {
            let isThereParticipant1 = false;
            let conditionPartic1 = ''; //child
            let isThereParticipant2 = false;
            let conditPartic2 = '';
            let powerPartic1 = 0;
            let powerPartic2 = 0;

            for (const object of this.listOfParticipants) {
                if (object.name === participant1) {
                    isThereParticipant1 = true;
                    conditionPartic1 = object.condition
                    powerPartic1 = Number(object.power)
                }
                if (object.name === participant2) {
                    isThereParticipant2 = true;
                    conditPartic2 = object.condition
                    powerPartic2 = Number(object.power)
                }
            }

            if (!isThereParticipant1 || !isThereParticipant2) {
                throw new Error(`Invalid entered name/s.`)
            }

            if (isThereParticipant1 && isThereParticipant2 && conditionPartic1 === conditPartic2) {
                //Да напиша логиката
                if (powerPartic1 > powerPartic2) {
                    for (const object of this.listOfParticipants) {
                        if (object.name === participant1) {
                            object.wins++;
                        }
                    }

                    return `The ${participant1} is winner in the game ${typeOfGame}.`
                } else if (powerPartic2 > powerPartic1) {
                    for (const object of this.listOfParticipants) {
                        if (object.name === participant2) {
                            object.wins++;
                        }
                    }
                    return `The ${participant2} is winner in the game ${typeOfGame}.`
                } else {
                    return `There is no winner.`
                }

            }
            if ((isThereParticipant1 && isThereParticipant2) && (conditionPartic1 !== conditPartic2)) {
                throw new Error(`Choose players with equal condition.`)
            }

            throw new Error(`Invalid entered name/s.`)

        }
        if (typeOfGame === "Battleship") {
            let isThereParticipant1 = false;
            for (const object of this.listOfParticipants) {
                if (object.name === participant1) {
                    object.power = Number(object.power) + 20
                    isThereParticipant1 = true;
                    return `The ${participant1} successfully completed the game ${typeOfGame}.`
                }
            }
            if (!isThereParticipant1) {
                throw new Error(`Invalid entered name/s.`)
            }

        }
    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)
        //participant, sorted in descending order by their wins - sort objects in array

        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(participant => {
                result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`)
            }
            )

        return result.join("\n")
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());






