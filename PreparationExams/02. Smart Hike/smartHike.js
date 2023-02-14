class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals[peak]) {
            return `${peak} has already been added to your goals`
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.goals[peak] && this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike")
        }

        let difference = this.resources - time * 10
        if (difference < 0) {
            return "You don't have enough resources to complete the hike"
        }

        this.resources = difference;
        this.listOfHikes.push({
            peak: peak,
            time: Number(time),
            difficultyLevel: difficultyLevel
        })
        return `You hiked ${peak} peak for ${time} hours and you have ${difference}% resources left`

    }

    rest(time) {
        this.resources = time * 10 + this.resources;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }

        return `You have rested for ${time} hours and gained ${time * 10}% resources`
    }

    showRecord(criteria) {

        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }

        if (criteria === "hard" || criteria === "easy") {
            let filteredArray = this.listOfHikes.filter(object => object.difficultyLevel === criteria);
             if(filteredArray.length === 0){
                return `${this.username} has not done any ${criteria} hiking yet`
             }

            filteredArray.sort((a,b)=>b.time - a.time);
            let shortestTimeObj = filteredArray[0];
            return `${this.username}'s best ${criteria} hike is ${shortestTimeObj.peak} peak, for ${shortestTimeObj.time} hours`

        }

        if(criteria === "all"){
            let result = [];
            result.push("All hiking records:")
            this.listOfHikes.forEach(object => result
                .push(`${this.username} hiked ${object.peak} for ${object.time} hours`))

            return result.join("\n")
        }

    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));


