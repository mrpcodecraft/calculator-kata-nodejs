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
        let numbers: number[] = [];

        let negatives: number[] = [];

        if (str.startsWith("//")) {
            const delimiter = str[2];
            const input = str.split("\n")[1];
            input.split(delimiter).map((num) => {
                let parsed: number = parseInt(num);

                if (parsed < 0) {
                    negatives.push(parsed);
                } else {
                    numbers.push(parsed);
                }
            });
        } else {
            numbers = str.split(/[,/\n]/).map(num => parseInt(num));
        }

        if (negatives.length > 0) {
            throw new Error("Negative numbers not allowed: " + negatives.join(","));
        }

        return numbers;
        
    }
}