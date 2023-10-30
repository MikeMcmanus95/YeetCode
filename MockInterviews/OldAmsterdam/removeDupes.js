/*
You're given an array of strings. Remove duplicates and keep the same order that you've encountered them
*/

function removeDupes(inputArray) {
    let inputCopy = [...inputArray];
    const set = new Set(inputCopy);
    return Array.from(set);
}

function removeDupes(inputArray) {
    let inputCopy = [...inputArray];
    const bucket = new Array(inputCopy.length).fill(null);
    const visited = new Set();

    for (let i = 0; i < inputCopy.length; i++) {
        let currEl = inputCopy[i];
        if (visited.has(currEl)) {
            continue;
        } else if (!visited.has(currEl)) {
            visited.add(currEl);
            bucket[i] = currEl;
        }
    }

    const result = [];
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i]) {
            result.push(bucket[i]);
        }
    }

    return result;
}