import { expect } from 'chai';
import { sum } from "../04-sum-of-numbers.js";

describe('sum() function', () => {
    it('Should return the correct sum for an array of positive integers', () => {
        expect(sum([1, 2, 3])).to.be.equal(6);
    });

    it('should correctly sum numbers including zero', () => {
        expect(sum([0, 1, 2])).to.be.equal(3);
    });

    it('should be undefined', () => {
        expect(sum([])).to.be.equal(0);
    });
});