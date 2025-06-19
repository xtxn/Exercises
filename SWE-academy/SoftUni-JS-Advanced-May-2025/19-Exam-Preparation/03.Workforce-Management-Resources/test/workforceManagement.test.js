import { expect } from 'chai';
import workforceManagement from '../workforceManagement.js';

describe("WorkforceManagment", () => {

    describe("recruitStaff()", () => {
        it('Should be hired', () => {
            expect(workforceManagement.recruitStaff('John', 'Developer', 5)).to.equal('John has been successfully recruited for the role of Developer.')
        });
        it('Should not be hired', () => {
            expect(workforceManagement.recruitStaff('John', 'Developer', 3)).to.equal('John is not suitable for this role.')
        });
        it('Should throw not hiring', () => {
            expect(() => workforceManagement.recruitStaff('John', 'Taxidriver', 5)).to.throw(Error, `We are not currently hiring for this role.`);
        });
    });

    describe("computeWages(hoursWorked)", () => {
        it('Should get normal salary', () => {
            expect(workforceManagement.computeWages(20)).to.equal(360);
        });
        it('Should get normal salary + bonus', () => {
            expect(workforceManagement.computeWages(200)).to.equal(200 * 18 + 1500);
        });
        it('Should hoursWorked is not valid - not a number', () => {
            expect(() => workforceManagement.computeWages(true)).to.throw(Error, 'Invalid hours');
        });
        it('Should hoursWorked is not valid - nengative number', () => {
            expect(() => workforceManagement.computeWages(-10)).to.throw(Error, 'Invalid hours');
        });
    });

    describe("dismissEmployee(workforce, employeeIndex)", () => {
        let workforce = ['Alice', 'John', 'Peter']
        it('Should remove worker at index', () => {
            expect(workforceManagement.dismissEmployee(workforce, 1)).to.equal('Alice, Peter');
        });
        it('Should throw error for invalid index - out of bounds', () => {
            expect(() => workforceManagement.dismissEmployee(workforce, 4)).to.throw(Error, 'Invalid input');
        });
        it('Should throw error for invalid index - not number', () => {
            expect(() => workforceManagement.dismissEmployee(workforce, '4')).to.throw(Error, 'Invalid input');
        });
        it('Should throw error for workforce not an array', () => {
            expect(() => workforceManagement.dismissEmployee('workforce', 4)).to.throw(Error, 'Invalid input');
        });
    });
})