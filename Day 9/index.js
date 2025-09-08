function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Parameters must be of the same type, either both numbers or both strings.");
}
console.log(sum(1, 2)); // Outputs: 3
console.log(sum("Hello, ", "World!")); // Outputs: "Hello, World!"
