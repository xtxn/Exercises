import { expect } from 'chai';
import { isSymmetric } from '../05-check-for-symmetry.js'

describe('isSymmetric() function', () => {
    describe('Symmetric array', () => {
        it('check for odd array with numbers', () => {
            expect(isSymmetric([1, 2, 1])).to.be.true;
        });
        it('check for even array with numbers', () => {
            expect(isSymmetric([1, 2, 2, 1])).to.be.true;
        });
        it('check for negative even array with numbers', () => {
            expect(isSymmetric([-1, -2, -2, -1])).to.be.true;
        });
        it('check for odd array with symbols', () => {
            expect(isSymmetric(['a', 'b', 'a'])).to.be.true;
        });
        it('check for even array with symbols', () => {
            expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
        });
    });
    describe('non-Symmetric array', () => {
        it('check for odd array with numbers', () => {
            expect(isSymmetric([1, 2, 2])).to.be.false;
        });
        it('check for even array with numbers', () => {
            expect(isSymmetric([1, 2, 2, 2])).to.be.false;
        });
        it('check for odd array with symbols', () => {
            expect(isSymmetric(['a', 'b', 'b'])).to.be.false;
        });
        it('check for even array with symbols', () => {
            expect(isSymmetric(['1', '2', 2, '1'])).to.be.false;
        });
    });
    describe('non-array', () => {
        it('check object type', () => {
            expect(isSymmetric({ 1: 1, 2: 2, 1: 1 })).to.be.false;
        });
        it('check for even parameters', () => {
            expect(isSymmetric(1, 2, 2, 2)).to.be.false;
        });
        it('check for odd parameters', () => {
            expect(isSymmetric('a', 2, 'b')).to.be.false;
        });
        it('check for even array with symbols', () => {
            expect(isSymmetric('a', 'b', 'a', 'a')).to.be.false;
        });
    });
});