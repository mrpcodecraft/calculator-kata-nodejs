import {describe} from 'mocha'; // Importing describe function from mocha to group test cases
import {expect} from 'chai'; // Importing expect function from chai for assertions
import Calculator from '../src/calculator'; // Importing the Calculator class to be tested

// Test suite for the Calculator class
describe("Test cases for calculator", () => {
    
    // Helper function to create a Calculator instance and call the add method
    const add = (str: string): number => {
        const calculator = new Calculator(); // Instantiate the Calculator class
        return calculator.add(str); // Call the add method with the input string
    }

    // Test case for an empty string input
    it("1) Test for empty string", () => {
        expect(add("")).to.equal(0); // Assert that an empty string returns 0
    });

    // Test case for a string with a single numeric value
    it("2) Test for string with single value", () => {
        expect(add("1")).to.equal(1); // Assert that a single value string returns the number itself
    });

    // Test case for a comma-separated string with multiple values
    it("3) Test for string with comma separated multiple value", () => {
        expect(add("1,2,3")).to.equal(6); // Assert that the sum of the values is correct
    });

    // Test case for a string with comma and newline-separated values
    it("4) Test for string with comma and next line tag separated multiple value", () => {
        expect(add("1\n2,3")).to.equal(6); // Assert the correct sum for mixed delimiters (comma, newline)
    });

    // Test case for a string with a custom delimiter and newline-separated values
    it("5) Test for string with custom delimiter and next line tag separated multiple value", () => {
        expect(add("//;\n1;2;5")).to.equal(8); // Assert the correct sum when using custom delimiter ";"
    });

    // Test case for a string with a negative number, expecting an error
    it("6) Test case for string with negative number", () => {
        expect(() => add("//;\n1;2;-5")).to.throw(Error, 'Negative numbers not allowed: -5'); // Assert error for negative numbers
    });

    // Test case for a string with multiple negative numbers, expecting an error
    it("7) Test case for string with multiple negative numbers", () => {
        expect(() => add("//;\n1;2;-5;-6")).to.throw(Error, 'Negative numbers not allowed: -5, -6'); // Assert error for multiple negative numbers
    });
    
    // Test case for a string with multi-character custom delimiter
    it("8) Test case for multi character delimiter", () => {
        expect(add("//[***]\n1,2***5***2")).to.equal(10); // Assert correct sum using multi-character delimiter "***"
    });

    // Test case for a string with multiple multi-character delimiters
    it("9) Test case for multiple multi character delimiters", () => {
        expect(add("//[***][---]\n1,2***5---2")).to.equal(10); // Assert correct sum using multiple custom delimiters "***" and "---"
    });

    // Test case to ignore values greater than or equal to 1000
    it("10) Test case to ignore values greater or equal to 1000", () => {
        expect(add("//[***][---]\n1,2***1000---1001")).to.equal(3); // Assert that values >= 1000 are ignored in the sum
    });
});
