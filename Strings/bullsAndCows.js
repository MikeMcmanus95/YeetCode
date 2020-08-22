/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

const getHint = function(secret, guess) {
    let numbers = new Map();
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < secret.length; i++) {
        const char = secret[i];
        if (numbers.has(char)) {
            let count = numbers.get(char);
            numbers.set(char, count + 1);
        } else {
            numbers.set(char, 1);
        }
    }

    for (let i = 0; i < guess.length; i++) {
        const char = guess[i];
        if (numbers.has(char)) {
            if (char === secret[i]) {
                bulls++;
                if (numbers.get(char) <= 0) cows--;
            } else {
                if (numbers.get(char) > 0) cows++;
            }
            numbers.set(char, numbers.get(char) - 1);
        }
    }
    return `${bulls}A${cows}B`;
};
