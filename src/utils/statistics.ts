// Function to calculate the mean (average) of an array of numbers
export function calculateMean(data: number[]) {
    // Calculate the sum of all values in the data array
    const sum = data.reduce((total: any, currentValue: any) => total + currentValue, 0);
    // Calculate the mean by dividing the sum by the number of data points
    const mean = sum / data.length;
    return mean
}

// Function to calculate the median of an array of numbers
export function calculateMedian(data: number[]): number {
    // Sort the data in ascending order
    data.sort((a: any, b: any) => a - b);
    const middle = Math.floor(data.length / 2);
    // Check if the number of data points is even
    if (data.length % 2 === 0) {
        // If even, return the average of the two middle values
        return (data[middle - 1] + data[middle]) / 2;
    } else {
        // If odd, return the middle value
        return data[middle];
    }
}

// Function to calculate the mode (most frequent value) of an array of numbers
export function calculateMode(data: number[]): number {
    // Create an object to store counts of each unique value
    const counts: { [key: number]: number } = {};
    data.forEach((value) => {
        counts[value] = (counts[value] || 0) + 1;
    });
    let mode = -1;// Default mode value if no mode is found
    let maxCount = 0;// Initialize the maximum count
    // Iterate through the counts to find the mode
    for (const value in counts) {
        if (counts[value] > maxCount) {
            maxCount = counts[value];
            mode = parseFloat(value);// Update the mode with the new value
        }
    }
    return mode;
}

// Function to calculate the "Gamma" property for each data point
export function calculateGamma(data: {
    Ash: number;
    Hue: number;
    Magnesium: number;
}[]): number[] {
    // Calculate "Gamma" for each data point using the provided formula
    return data.map((item) => (item.Ash * item.Hue) / item.Magnesium);
}