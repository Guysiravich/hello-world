// This script calculates the average score and filters students who failed

const students = [
    { name: "Alice", scores: [85, 92, 78] },
    { name: "Bob", scores: [50, 60, 58] },
    { name: "Charlie", scores: [95, 88, 93] },
    { name: "Dave", scores: [40, 45, 38] }
];

// Function to calculate average score
function calculateAverage(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

// Add average and pass/fail status
const results = students.map(student => {
    const average = calculateAverage(student.scores);
    return {
        name: student.name,
        average: average.toFixed(2),
        status: average >= 60 ? "Pass" : "Fail"
    };
});

// Print the results
console.log("Student Results:");
results.forEach(result => {
    console.log(`${result.name}: Avg = ${result.average}, Status = ${result.status}`);
});
