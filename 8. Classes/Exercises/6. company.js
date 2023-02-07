class Company {

    constructor() {
        this.departments = {}
    }


    addEmployee(name, salary, position, department) {
        if (!(name && position && department) || salary <= 0) {
            throw new Error('Invalid input!');
        };

        if (!this.departments[department]) {
            this.departments[department] = {}
        }

        if (!this.departments[department][name]) {
            this.departments[department][name] = { salary: Number(salary), position: position};
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        };

    }


    bestDepartment() {
        let theBestDepart = ''
        let theHightsAvgSalary = 0;
        let theBestWithData = [];

        for (const department in this.departments) {
            let currentAvgSallary = 0;
            let sumSalary = 0;
            let counterEmployees = 0;
            for (const employee in this.departments[department]) {
                sumSalary += this.departments[department][employee].salary
                counterEmployees++;
            }
            currentAvgSallary = sumSalary / counterEmployees

            if (theHightsAvgSalary <= currentAvgSallary) {
                theHightsAvgSalary = currentAvgSallary
                theBestDepart = department
            }

        }

        theBestWithData.push(`Best Department is: ${theBestDepart}`)
        theBestWithData.push(`Average salary: ${theHightsAvgSalary.toFixed(2)}`)

        let sorted = Object.entries(this.departments[theBestDepart]).sort((a, b) => b[1].salary - a[1].salary || a[0].localeCompare(b[0]))
        sorted.forEach(el => theBestWithData.push(`${el[0]} ${el[1].salary} ${el[1].position}`));

        return theBestWithData.join('\n');
    }


}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());