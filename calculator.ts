const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export default class Calculator {
    add(str: string): number {
        let number = str ? this.parseString(str) : 0;
        return number;
    }


    parseString(str: string): number {
        return parseInt(str);
    }
}