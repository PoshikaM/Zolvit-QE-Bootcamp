import { expect } from 'chai'
import { add, subtract, multiply, divide, isEven, isOdd, isPositive, isNegative } from '../math.js'

describe('Maths', () => {
    // Addition
    describe('add()', () => {
        it('should return 4 for add(2, 2)', () => {
            let result = add(2,2);
            expect(result).to.equal(4);
        });
    });

    // Subtract
    describe('subtract()', () => { 
        it('should return 1 for subtract(3, 2)', () => {
            let result = subtract(3,2);
            expect(result).to.equal(1);
        });
     });

    // Multiply
    describe('multiply()', () => {
        it('should return 10 for multiply(2, 5)', () => {
            let result = multiply(2, 5);
            expect(result).to.equal(10);
        });
     });

    // Division
    describe('divide()', () => {
        it('should return 2 for divide(10, 5)', () => {
            let result = divide(10, 5);
            expect(result).to.equal(2);
        });

        it('should throw error when divided by 0', () => {
            expect(() => divide(10, 0)).to.throw('Cannot be divided by zero');
        });
     });

    // Check Even
    describe('isEven()', () => {
        it('should return TRUE for even numbers', () => {
            let result = isEven(4);
            expect(result).to.be.true;
        });

        it('should return FALSE for odd numbers', () => {
            let result = isEven(5);
            expect(result).to.be.false;
        });
     });

    // Check Odd
    describe('isOdd()', () => { 
        it('should return TRUE for odd numbers', () => {
            let result = isOdd(7);
            expect(result).to.be.true;
        });

        it('should return FALSE for even numbers', () => {
            let result = isOdd(8);
            expect(result).to.be.false;
        });
      });

    // Check Positive
    describe('isPositive()', () => { 
        it('should return TRUE for positive numbers', () => {
            let result = isPositive(6);
            expect(result).to.be.true;
        });

        it('should return FALSE for negative numbers', () => {
            let result = isPositive(-1);
            expect(result).to.be.false;
        });
      });

    // Check Negative
    describe('isNegative()', () => { 
        it('should return TRUE for negative numbers', () => {
            let result = isNegative(-9);
            expect(result).to.be.true;
        });

        it('should return FALSE for positive numbers', () => {
            let result = isNegative(1);
            expect(result).to.be.false;
        });
      });
})