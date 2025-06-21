class SpaceAgency {
    constructor(agencyName, mission) {
        this.agencyName = agencyName;
        this.mission = mission;
        this.candidates = [];
    };

    acceptApplications(applications) {
        let addedNames = [];
        for (const candidate of applications) {
            let [name, education, flightHours] = candidate.split('-');
            flightHours = Number(flightHours);

            let foundName = this.candidates.find(a => a.name === name);

            if (foundName) {
                if (flightHours > foundName.flightHours)
                    foundName.flightHours = flightHours;
            } else if (!foundName) {
                this.candidates.push({ name, education, flightHours });
                addedNames.push(name);
            };
        };
        return `You successfully added candidates: ${addedNames.join(', ')}.`
    };

    chooseForMission(candidateInfo) {
        let [name, minimumFlightHours] = candidateInfo.split('-');
        let foundName = this.candidates.find(a => a.name === name);

        if (!foundName) {
            throw new Error(`${name} is not in the candidates list!`)
        } else if (foundName.flightHours < minimumFlightHours) {
            throw new Error(`${name} does not have enough flight hours for the ${this.mission} mission, minimum required is ${minimumFlightHours} hours.`)
        } else {
            foundName.flightHours = 'selected';
        };
        return `Congratulations, ${name} will participate in the ${this.mission} mission!`
    };

    trainingBonus(name) {
        let foundName = this.candidates.find(a => a.name === name);

        if (!foundName) {
            throw new Error(`${name} is not in the candidates list!`)
        } else {
            if (foundName.education === 'Pilot') {
                return `${name} will be trained by ${this.agencyName} as part of the ${this.mission} mission with a training bonus of $100,000!`
            } else if (foundName.education === 'Engineer') {
                return `${name} will be trained by ${this.agencyName} as part of the ${this.mission} mission with a training bonus of $120,000!`
            } else {
                return `${name} will be trained by ${this.agencyName} as part of the ${this.mission} mission with a training bonus of $80,000!`
            };
        };
    };

    candidatesReport() {
        let result = [];
        let nonSelectedNames = this.candidates.filter(a => typeof a.flightHours === 'number').sort((a, b) => a.flightHours - b.flightHours);
        let selectedNames = this.candidates.filter(a => typeof a.flightHours !== 'number');
        let sortedNames = nonSelectedNames.concat(selectedNames)

        if (this.candidates.length === 0) {
            throw new Error('Candidate database is empty!')
        } else {
            result.push('Candidates list:');
            sortedNames.forEach(a => result.push(`${a.name}-${a.flightHours}`));
        };
        return result.join('\n');
    };
}

// let agency = new SpaceAgency("NASA", "Mars Exploration");
// console.log(agency.acceptApplications([
//     "Neil Armstrong-Pilot-1200",
//     "Margaret Hamilton-Engineer-800",
//     "Neil Armstrong-Pilot-1400"
// ]));

// let agency = new SpaceAgency("NASA", "Mars Exploration");
// console.log(agency.acceptApplications([
//     "Neil Armstrong-Pilot-1200",
//     "Margaret Hamilton-Engineer-800"
// ]));
// console.log(agency.chooseForMission("Neil Armstrong-1000"));
// console.log(agency.chooseForMission("Margaret Hamilton-900"));

// let agency = new SpaceAgency("NASA", "Mars Exploration");
// console.log(agency.acceptApplications([
//     "Neil Armstrong-Pilot-1200",
//     "Margaret Hamilton-Engineer-800"
// ]));
// console.log(agency.chooseForMission("Neil Armstrong-1000"));
// console.log(agency.trainingBonus("Neil Armstrong"));
// console.log(agency.trainingBonus("Margaret Hamilton"));

let agency = new SpaceAgency("NASA", "Mars Exploration");
console.log(agency.acceptApplications([
    "Neil Armstrong-Pilot-1200",
    "Margaret Hamilton-Engineer-800",
    "Mae Jemison-Biologist-700"
]));
console.log(agency.chooseForMission("Neil Armstrong-1000"));
console.log(agency.trainingBonus("Mae Jemison"));
console.log(agency.candidatesReport());