export default class Calculator {

    // Method to add numbers from a string input
    add(str: string): number {
        // If the string is empty, use "0" as a default value, otherwise parse the string
        let numbers = str ? this.parseString(str) : ["0"];
        // Evaluate the parsed numbers by joining them with a "+" and using eval to calculate the sum
        return eval(numbers.join("+"));
    }

    // Method to parse the input string and convert it into an array of numbers
    parseString(str: string): number[] {
        if (!str) return [0]; // If the string is empty, return an array with a single 0

        let numbers: number[] = []; // Array to hold the valid numbers
        let negatives: number[] = []; // Array to hold negative numbers for validation

        // Fetch any custom delimiters defined in the input string
        let delimiters: string[] = this.fetchDelimiters(str);

        // Modify the string based on delimiters
        str = this.fetchFinalString(str, delimiters);

        // Split the string by commas and parse each number
        str.split(',').map((num) => {
            let parsed: number = parseInt(num); // Convert string to a number

            if (parsed < 0) { 
                negatives.push(parsed); // Push negative numbers to negatives array for error handling
            } else if (parsed < 1000) { 
                numbers.push(parsed); // Add numbers less than 1000 to the numbers array
            }
        });

        // Throw an error if there are any negative numbers
        if (negatives.length > 0) {
            throw new Error("Negative numbers not allowed: " + negatives.join(", "));
        }

        return numbers; // Return the list of parsed valid numbers
    }

    // Method to fetch delimiters from the input string
    fetchDelimiters(str: string): string[] {
        let delimiters: string[] = [];

        // If string starts with "//", it indicates custom delimiters
        if (str.startsWith("//")) {
            // Extract delimiters between square brackets
            delimiters = str.match(/(?<=\[)[^\r\n]*?(?=\])/g) || [];

            // If no bracketed delimiters, use the third character as a delimiter
            if (delimiters.length === 0) {
                delimiters = [str.charAt(2)];
            }
        }

        // Always include the newline character as a delimiter
        delimiters = [
            ...delimiters,
            '\n',
        ];

        return delimiters; // Return the list of delimiters
    }

    // Method to process the input string and replace delimiters with commas for final parsing
    fetchFinalString(str: string, delimiters: string[]): string {
        let values: string[] = str.split('\n'); // Split the string by newline

        // If there are custom delimiters, remove the first line
        if (delimiters.length > 1) {
            values.shift();
        }

        str = values.join(','); // Join the remaining lines with commas

        // Replace all occurrences of the delimiters with commas
        for (let delimiter of delimiters) {
            str = str.split(delimiter).join(',');
        }

        return str; // Return the modified string for further processing
    }

}
