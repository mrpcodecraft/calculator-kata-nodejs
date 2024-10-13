import readline from "readline";
import Calculator from "./src/calculator";

// Create readline interface for input, without output
const reader = readline.createInterface({
    input: process.stdin,  // Taking input from the terminal
    output: undefined      // Disable default stdout to avoid duplicated output
});

// Function to handle the calculation
async function calculate() {
    const inputString: string = await readLine(); // Get the input string from user
    const calculator = new Calculator(); // Create a calculator instance

    // Output the result
    console.log("Result:", calculator.add(inputString));

    // Close the readline interface after processing
    reader.close();
}

// Function to read input line by line and resolve when finished
function readLine(): Promise<string> {
    return new Promise((resolve) => {
        let finalStr = ""; // Initialize an empty string to collect input

        console.log("Enter numbers (press Enter twice to finish):");

        // Listen for each line of input
        reader.on("line", (line: string) => {
            if (line === "") {
                // If an empty line is entered, resolve the promise and stop reading
                resolve(finalStr.trim()); // Trim to remove trailing newlines
            } else {
                console.log("Enter next string or Number");
                // Otherwise, append the input to the final string
                finalStr += line + "\n";
            }
        });
    });
}

// Start the calculation process
calculate();
