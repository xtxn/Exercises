import { expect } from 'chai';
import foodDelivery from '../food-delivery.js'

describe('foodDelivery', () => {
    describe('getCategory', () => {
        it('Should be vegan', () => {
            expect(foodDelivery.getCategory('Vegan')).to.be.equal('Dishes that contain no animal products.');
        });
        it('Should be Vegetarian', () => {
            expect(foodDelivery.getCategory('Vegetarian')).to.be.equal('Dishes that contain no meat or fish.');
        });
        it('Should be Gluten-Free', () => {
            expect(foodDelivery.getCategory('Gluten-Free')).to.be.equal('Dishes that contain no gluten.');
        });
        it('Should be All', () => {
            expect(foodDelivery.getCategory('All')).to.be.equal('All available dishes.');
        });
        it('Should be error', () => {
            expect(() => foodDelivery.getCategory('123')).to.throw('Invalid Category!');
        });
        it('Should be error', () => {
            expect(() => foodDelivery.getCategory(123)).to.throw('Invalid Category!');
        });
    });

    describe('addMenuItem', () => {
        it('Should be valid input', () => {
            const menuItem = ['Chicken', 13.99];
            const maxPrice = 16;
            expect(() => foodDelivery.addMenuItem(menuItem, maxPrice)).to.not.throw();
        });
        it('Should throw error if menuItem is not an array', () => {
            expect(() => foodDelivery.addMenuItem('Chicken', 16)).to.throw("Invalid Information!");
        });
        it('Should throw error if maxPrice is not a number', () => {
            expect(() => foodDelivery.addMenuItem(['Chicken'], '16')).to.throw("Invalid Information!");
        });
        it('Should throw error if menuItem length < 1', () => {
            expect(() => foodDelivery.addMenuItem([], 16)).to.throw("Invalid Information!");
        });
        it('Should throw error if maxPrice < 5', () => {
            expect(() => foodDelivery.addMenuItem(['Chicken'], 4)).to.throw("Invalid Information!");
        });
        it('Should have valid input', () => {
            const menuItem =
                [{ name: 'chicken', price: 15 },
                { name: 'chicken', price: 25 },
                { name: 'chicken', price: 100 }
                ];
            const result = foodDelivery.addMenuItem(menuItem, 15);
            expect(result).to.be.equal("There are 1 available menu items matching your criteria!");
        });
        it('Should have 0 menun items', () => {
            const menuItem =
                [{ name: 'chicken', price: 15 },
                { name: 'chicken', price: 25 },
                { name: 'chicken', price: 100 }
                ];
            const result = foodDelivery.addMenuItem(menuItem, 10);
            expect(result).to.be.equal("There are 0 available menu items matching your criteria!");
        });

    });

    describe('calculateOrderCost', () => {
        it('Should be valid input', () => {
            expect(() => foodDelivery.calculateOrderCost(['standart', 'express'], ['sauce', 'beverage'], true)).to.not.throw();
        });
        it('Should throw error if shipping is not an array', () => {
            expect(() => foodDelivery.calculateOrderCost('standart', ['sauce', 'beverage'], true)).to.throw("Invalid Information!");
        });
        it('Should throw error if addons is not an array', () => {
            expect(() => foodDelivery.calculateOrderCost(['standart', 'express'], 'sauce', true)).to.throw("Invalid Information!");
        });
        it('Should throw error if discount is not boolean', () => {
            expect(() => foodDelivery.calculateOrderCost(['standart', 'express'], ['sauce', 'beverage'], 'true')).to.throw("Invalid Information!");
        });
        it('Should throw error if discount is not boolean', () => {
            expect(() => foodDelivery.calculateOrderCost(['standart', 'express'], ['sauce', 'beverage'], 10)).to.throw("Invalid Information!");
        });

        it('should calculate correct total without discount', () => {
            expect(foodDelivery.calculateOrderCost(['standard', 'express'], ['sauce', 'beverage'], false)).to.equal('You spend $12.50 for shipping and addons!');
        });
        it('should calculate correct total with discount', () => {
            expect(foodDelivery.calculateOrderCost(['express'], ['sauce', 'beverage'], true)).to.equal('You spend $8.07 for shipping and addons with a 15% discount!');
        });
        it('should return $0.00 if no options selected (no discount)', () => {
            expect(foodDelivery.calculateOrderCost([], [], false)).to.equal('You spend $0.00 for shipping and addons!');
        });
        it('should return $0.00 if no options selected (with discount)', () => {
            expect(foodDelivery.calculateOrderCost([], [], true)).to.equal('You spend $0.00 for shipping and addons with a 15% discount!');
        });
        it('should correctly round total to two decimals', () => {
            expect(foodDelivery.calculateOrderCost(['express'], ['beverage'], true)).to.equal('You spend $7.22 for shipping and addons with a 15% discount!');
        });

    });
});