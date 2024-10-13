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
        if (!str) return [0];

        let numbers: number[] = [];
        let negatives: number[] = [];
        
        let delimiters: string[] = this.fetchDelimiters(str);
        
        let foundThousands: boolean = false;

        str = this.fetchFinalString(str, delimiters);

        str.split(',').map((num) => {
            let parsed: number = parseInt(num);

            if (parsed < 0) {
                negatives.push(parsed);
            } else if (parsed < 1000) {
                numbers.push(parsed);
            }
        });
        
        if (negatives.length > 0) {
            throw new Error("Negative numbers not allowed: " + negatives.join(", "));
        }

        return numbers;
    }

    fetchDelimiters(str: string): string[] {
        let delimiters: string[] = [];
        
        if (str.startsWith("//")) {
            delimiters = str.match(/(?<=\[)[^\r\n]*?(?=\])/g) || [];

            if (delimiters.length === 0) {
                delimiters = [str.charAt(2)];
            }
        }
        
        delimiters = [
            ...delimiters,
            '\n',
        ];

        return delimiters;
    }

    fetchFinalString(str: string, delimiters: string[]): string {
        let values: string[] = str.split('\n');

        if (delimiters.length > 1) {
            values.shift();
        }
        
        str = values.join(',');

        for(let delimiter of delimiters) {
            str = str.split(delimiter).join(',');
        }

        return str;
    }

}