class HomeRenovation {

    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    };

    addTask(description, cost, priority) {
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`
        };
        this.tasks.push({ description, cost, priority });
        this.budget -= cost;
        return `The task '${description}' has been successfully added to the renovation plan.`
    };

    markTaskAsCompleted(description) {
        let decriptionIndex = this.tasks.findIndex(a => a.description === description);
        if (decriptionIndex < 0) {
            throw `Task '${description}' not found in the renovation plan.`
        }
        let completed = this.tasks.splice(decriptionIndex, 1);
        this.completedTasks.push(completed);

        return `The task '${description}' has been successfully completed.`
    };

    getPriorityTasksCount(minimalPriority) {
        let count = 0;
        if (minimalPriority <= 0) {
            return `The priority cannot be zero or negative.`
        };

        this.tasks.forEach(a => a.priority >= minimalPriority ? count++ : '');
        if (count) {
            return `You have ${count} tasks to prioritize.`
        } else {
            return `No tasks found with priority ${minimalPriority} or higher.`
        }
    };

    renovationSummary() {
        let answer = [];
        if (this.completedTasks.length <= 0) {
            throw `No tasks have been completed yet!`;
        } else {
            answer.push(`Budget left $${this.budget}.`)
        };
        answer.push(`You have completed ${this.completedTasks.length} tasks.`);
        answer.push(`Pending tasks in the renovation plan:`);
        for (const element of this.tasks) {
            answer.push(`${element.description} - Cost: ${element.cost}, Priority: ${element.priority}`);
        }
        return answer.join('\n')
    };
}

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2));
// console.log(renovation.addTask("Install new windows", 5000, 1));
// console.log(renovation.addTask("New Roof", 5000, 1));

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2));
// console.log(renovation.addTask("Install new windows", 5000, 1));
// console.log(renovation.markTaskAsCompleted("Paint walls"));
// console.log(renovation.markTaskAsCompleted("Change doors")); 

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2));
// console.log(renovation.addTask("Install new windows", 5000, 1));
// console.log(renovation.markTaskAsCompleted("Paint walls"));
// console.log(renovation.getPriorityTasksCount(1)); 

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());