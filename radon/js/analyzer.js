function analyze(text) {
    let count = {};
    const letters = text.toLowerCase().normalize().trim().split('');
    console.log('Analyzing ' + letters.length + ' letters');

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        if (letter in count) {
            count[letter]++;
        }
        else {
            count[letter] = 1;
        };
    };
    return count;
}