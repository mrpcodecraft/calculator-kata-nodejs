const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export default class Calculator {
    add(str: string): number {
        let numbers = str ? this.parseString(str) : ["0"];
        return eval(numbers.join("+"));
    }


    parseString(str: string): number[] {
        return str.split(",").map(num => parseInt(num));
    }
}