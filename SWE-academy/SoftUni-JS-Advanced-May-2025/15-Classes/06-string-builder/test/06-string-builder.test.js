import { expect } from 'chai';
import { StringBuilder } from '../06-string-builder.js'

describe('StringBuilder', () => {
    let sb;
    beforeEach(() => {
        sb = new StringBuilder();
    });

    describe('Constructor', () => {
        it('should initialize with an empty array if no argument is passed', () => {
            expect(sb.toString()).to.equal('');
            expect(sb._stringArray).to.be.an('array').that.is.empty;
        });

        it('should initialize with the given string if a string argument is passed', () => {
            const initialString = 'test';
            sb = new StringBuilder(initialString);
            expect(sb.toString()).to.equal(initialString);
            expect(sb._stringArray).to.deep.equal(Array.from(initialString));
        });

        it('should throw TypeError if the argument is not a string (for constructor)', () => {
            expect(() => new StringBuilder(123)).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder(null)).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder(true)).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder([])).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder({})).to.throw(TypeError, 'Argument must be a string');
        });

        it('should not throw TypeError for undefined argument in constructor', () => {
            expect(() => new StringBuilder(undefined)).to.not.throw();
            expect(new StringBuilder(undefined).toString()).to.equal('');
        });
    });

    describe('append', () => {
        it('should append a string to the end of the current content', () => {
            sb = new StringBuilder('hello');
            sb.append(', world');
            expect(sb.toString()).to.equal('hello, world');
        });

        it('should append to an empty StringBuilder', () => {
            sb.append('first');
            expect(sb.toString()).to.equal('first');
        });

        it('should handle appending an empty string', () => {
            sb = new StringBuilder('initial');
            sb.append('');
            expect(sb.toString()).to.equal('initial');
        });

        it('should throw TypeError if the argument is not a string (for append)', () => {
            expect(() => sb.append(123)).to.throw(TypeError, 'Argument must be a string');
            expect(() => sb.append(null)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('prepend', () => {
        it('should prepend a string to the beginning of the current content', () => {
            sb = new StringBuilder('world');
            sb.prepend('hello, ');
            expect(sb.toString()).to.equal('hello, world');
        });

        it('should prepend to an empty StringBuilder', () => {
            sb.prepend('first');
            expect(sb.toString()).to.equal('first');
        });

        it('should handle prepending an empty string', () => {
            sb = new StringBuilder('initial');
            sb.prepend('');
            expect(sb.toString()).to.equal('initial');
        });

        it('should throw TypeError if the argument is not a string (for prepend)', () => {
            expect(() => sb.prepend(123)).to.throw(TypeError, 'Argument must be a string');
            expect(() => sb.prepend(true)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('insertAt', () => {
        it('should insert a string at a specified index in the middle', () => {
            sb = new StringBuilder('hello world');
            sb.insertAt(' big', 5);
            expect(sb.toString()).to.equal('hello big world');
        });

        it('should insert a string at the beginning (index 0)', () => {
            sb = new StringBuilder('world');
            sb.insertAt('hello ', 0);
            expect(sb.toString()).to.equal('hello world');
        });

        it('should insert a string at the end (index equals length)', () => {
            sb = new StringBuilder('hello');
            sb.insertAt(' world', 5);
            expect(sb.toString()).to.equal('hello world');
        });

        it('should handle inserting an empty string', () => {
            sb = new StringBuilder('test');
            sb.insertAt('', 2);
            expect(sb.toString()).to.equal('test');
        });

        it('should throw TypeError if the string argument is not a string (for insertAt)', () => {
            sb = new StringBuilder('test');
            expect(() => sb.insertAt(123, 1)).to.throw(TypeError, 'Argument must be a string');
            expect(() => sb.insertAt([], 0)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('remove', () => {
        it('should remove characters from a specified start index for a given length', () => {
            sb = new StringBuilder('hello beautiful world');
            sb.remove(6, 10);
            expect(sb.toString()).to.equal('hello world');
        });

        it('should remove characters from the beginning of the string', () => {
            sb = new StringBuilder('initial');
            sb.remove(0, 3);
            expect(sb.toString()).to.equal('tial');
        });

        it('should remove characters until the end if length is greater than remaining characters', () => {
            sb = new StringBuilder('short');
            sb.remove(2, 100);
            expect(sb.toString()).to.equal('sh');
        });

        it('should remove all characters if startIndex is 0 and length covers entire string', () => {
            sb = new StringBuilder('all gone');
            sb.remove(0, sb.toString().length);
            expect(sb.toString()).to.equal('');
        });

        it('should do nothing if length is 0', () => {
            sb = new StringBuilder('test');
            sb.remove(1, 0);
            expect(sb.toString()).to.equal('test');
        });
    });

    describe('toString', () => {
        it('should return an empty string for an empty StringBuilder', () => {
            expect(sb.toString()).to.equal('');
        });

        it('should return the correct string representation after append operations', () => {
            sb.append('one');
            sb.append('two');
            expect(sb.toString()).to.equal('onetwo');
        });

        it('should return the correct string representation after prepend operations', () => {
            sb.prepend('one');
            sb.prepend('two');
            expect(sb.toString()).to.equal('twoone');
        });

        it('should return the correct string representation after insertAt operations', () => {
            sb = new StringBuilder('abc');
            sb.insertAt('XYZ', 1);
            expect(sb.toString()).to.equal('aXYZbc');
        });

        it('should return the correct string representation after remove operations', () => {
            sb = new StringBuilder('abcdefg');
            sb.remove(2, 3);
            expect(sb.toString()).to.equal('abfg');
        });

        it('should work correctly with complex sequence of operations', () => {
            sb = new StringBuilder('hello');
            sb.append(', there');
            sb.prepend('User, ');
            sb.insertAt('woop', 5);
            expect(sb.toString()).to.equal('User,woop hello, there');
            sb.remove(6, 3);
            expect(sb.toString()).to.equal('User,w hello, there');
        });
    });

    // --- Static _vrfyParam method (indirectly tested by other methods) ---
    describe('Static _vrfyParam', () => {
        it('should exist as a static method', () => {
            expect(StringBuilder).to.have.property('_vrfyParam').that.is.a('function');
        });
    });
});