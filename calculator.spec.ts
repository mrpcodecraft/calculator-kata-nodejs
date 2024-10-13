import {describe} from 'mocha';
import {expect} from 'chai';
import Calculator from './calculator';

describe("Test cases for calculator", () => {
    const add = (): number => {
        const calculator = new Calculator();
        
        return calculator.add();
    }

    it("1) Test for empty string", () => {
        expect(add()).to.equal(0);
    });
});