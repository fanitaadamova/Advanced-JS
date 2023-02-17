class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let allUniqNames = [];
        for (const playerInfo of footballPlayers) {
            let [name, age, playerValue] = playerInfo.split("/");
            age = Number(age);
            playerValue = Number(playerValue);
            if (!allUniqNames.includes(name)) {
                allUniqNames.push(name);
            }
            let isMissingName = true;
            for (let object of this.invitedPlayers) {
                if (object.name === name) {
                    isMissingName = false;
                    //името го има
                    if (object.playerValue < playerValue) {
                        object.playerValue = playerValue
                    }
                }
            }

            if (isMissingName) {
                //името го няма
                this.invitedPlayers.push({
                    name,
                    age,
                    playerValue
                })
            }

        }

        return `You successfully invite ${(allUniqNames.join(', '))}.`

    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        let isMissingName = true;

        for (const object of this.invitedPlayers) {
            if (object.name === name) {
                isMissingName = false;
                if (object.playerValue !== "Bought" && (object.playerValue > playerOffer)) {
                    throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${object.playerValue - playerOffer} million more are needed to sign the contract!`)
                }
                object.playerValue = "Bought"
                return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
            }
        }
        //името не е в списъка с поканени
        if (isMissingName) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

    }

    ageLimit(name, age) {
        let isMissingName = true;
        for (const object of this.invitedPlayers) {
            if (object.name === name) {
                isMissingName = false;
                if (object.age < age) {
                    let difrence = age - object.age;
                    if (difrence < 5) {
                        return `${name} will sign a contract for ${difrence} years with ${this.clubName} in ${this.country}!`
                    }
                    if (difrence > 5) {
                        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                    }
                }

                return `${name} is above age limit!`
            }
        }

        //името не е в списъка с поканени
        if (isMissingName) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
    }

    transferWindowResult() {
        let result = [];
        result.push("Players list:")

        this.invitedPlayers
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(object => {
                result.push(`Player ${object.name}-${object.playerValue}`)
            })

        return result.join('\n')
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());



