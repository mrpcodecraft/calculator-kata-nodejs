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

        if (str.startsWith("//")) {
            const delimiter = str[2];
            const input = str.split("\n")[1];
            return input.split(delimiter).map(num => parseInt(num));
        }
        
        return str.split(/[,/\n]/).map(num => parseInt(num));
    }
}