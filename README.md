# Calculator KATA Node.js

A Node.js implementation of the Calculator KATA. This project demonstrates a simple string calculator that takes a string input, extracts numbers from it, and performs basic arithmetic operations. The project is built using Node.js and TypeScript and follows a TDD (Test-Driven Development) approach.

## Features

- Add numbers in a comma-separated string.
- Supports custom delimiters.
- Ignores numbers greater than or equal to 1000.
- Throws an error for negative numbers and lists them.
- Supports multi-character delimiters.
- Follows TDD principles with unit tests for each feature.

## Requirements

- Node.js (v12.x or higher)
- npm (v6.x or higher)

## Getting Started

Follow the steps below to run the project on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/mrpcodecraft/calculator-kata-nodejs
cd calculator-kata-nodejs
```

### 2. Install dependencies

Once you have cloned the repository, install the necessary dependencies by running:

```bash
npm install
```

### 3. Run the calculator

You can run the calculator by running the following command:

```bash
npm start
```

The program will prompt you to enter a string of numbers, separated by commas or custom delimiters, and then display the result.

### 4. Running Tests

This project follows a TDD approach, with tests written using Mocha and Chai. To run the test suite, use the following command:

```bash
npm test
```

You should see output showing the test results for all defined cases.

### Example Usage

- Input: `"1,2,3"`
- Output: `Result: 6`

- Input: `"//;\n1;2;5"`
- Output: `Result: 8`

- Input: `"//[***]\n1,2***5"`
- Output: `Result: 8`

- Input: `"//[***]\n1,1000***1001***5"`
- Output: `Result: 6`

- Input: `"//;\n1;-2;5"`
- Output: Throws an error: `"Negative numbers not allowed: -2"`

## Code Structure

The project consists of the following key files:

### `src/calculator.ts`

The core logic of the calculator, including functions for parsing the input string, handling custom delimiters, and calculating the sum of numbers.

### `src/index.ts`

The main entry point of the application that interacts with the user via the command line and calls the calculator logic.

### `test/calculator.test.ts`

Unit tests for the calculator functions, written using Mocha and Chai.

### `package.json`

Contains metadata about the project, scripts for running the application and tests, and a list of dependencies.

## Technologies Used

- **Node.js**: JavaScript runtime for building the application.
- **TypeScript**: Strongly-typed language built on JavaScript.
- **Mocha**: Test framework for JavaScript.
- **Chai**: Assertion library for testing.

## How It Works

1. **String Parsing**: The calculator takes a string input of numbers separated by delimiters (default is comma, but can be customized).
2. **Sum Calculation**: It sums up all numbers from the string.
3. **Error Handling**: It throws an error if there are negative numbers in the input, listing all such numbers.
4. **Custom Delimiters**: Allows using custom single or multi-character delimiters by defining them at the start of the string.

## Running with Nodemon

For easier development, you can use `nodemon` to automatically restart the application when you make changes to the source code.

```bash
npm run dev
```

## Example Test Cases

1. **Test empty string:**
   - Input: `""`
   - Expected Output: `0`
   
2. **Test single value:**
   - Input: `"1"`
   - Expected Output: `1`

3. **Test multiple values:**
   - Input: `"1,2,3"`
   - Expected Output: `6`

4. **Test for custom delimiter:**
   - Input: `"//;\n1;2;3"`
   - Expected Output: `6`

5. **Test for negative numbers:**
   - Input: `"//;\n1;-2;3"`
   - Expected Output: Throws an error: `Negative numbers not allowed: -2`

## Contributing

If you wish to contribute to this project, feel free to submit a pull request. Contributions in the form of bug fixes, features, or documentation are always welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Suggested Tags
- `nodejs`
- `typescript`
- `TDD`
- `calculator`
- `kata`
- `mocha`
- `chai`
- `testing`

---

Let me know if you need any more modifications!