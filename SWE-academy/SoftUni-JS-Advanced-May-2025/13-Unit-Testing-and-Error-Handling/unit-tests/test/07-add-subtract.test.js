import { expect } from 'chai';
import { createCalculator } from '../07-add-subtract.js';

describe('createCalculator() function', () => {
    describe('return an object', () => {
        let calculator = null;
        beforeEach(() => {
            calculator = createCalculator();
        })
        it('Should have add', () => {
            expect(calculator).to.have.property('add');
        });
        it('Should have subtract', () => {
            expect(calculator).to.have.property('subtract');
        });
        it('Should have get', () => {
            expect(calculator).to.have.property('get');
        });
        it('Should work as intended', () => {
            calculator.add(5);
            expect(calculator.get()).to.equal(5);
        });
        it('Should work as intended', () => {
            calculator.subtract(5);
            expect(calculator.get()).to.equal(-5);
        });
        it('Should take number in add', () => {
            calculator.add('5');
            expect(calculator.get()).to.equal(5);
        });
        it('Should work as intended', () => {
            calculator.subtract('5');
            expect(calculator.get()).to.equal(-5);
        });
    });
});