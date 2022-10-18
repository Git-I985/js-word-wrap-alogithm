/*
    - Function: wrapping lines at a given number of columns without breaking words.;
    
    - Task from educative.io JS Assessment: Assess your Javascript skills
    
    - Algorithm for 5 width value below:
        1 [ "a", "b", "c", "d", "e", "f", "j", "def"]
        2 [ "a b", "c", "d", "e", "f", "j", "def"]
        3 [ "a b c", "d", "e", "f", "j", "def"]
        4 [ "a b c", "d e", "f", "j", "def"]
        5 [ "a b c", "d e f", "j", "def"]
        6 [ "a b c", "d e f", "j def"]
*/

function wordWrap(str, width) {
    validateWordWrapArgs(str, width);

    const words = str.split(' ');

    for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
        const word = words[wordIndex];
        const nextWord = words[wordIndex + 1];
        const wordsCanFitOnSameLine = (word + nextWord).length + 1 <= width;
        if (nextWord && wordsCanFitOnSameLine) {
            words[wordIndex] = word + ' ' + nextWord; // merges nextWord into word
            words.splice(wordIndex + 1, 1); // removes nextWord afer merging into word
            --wordIndex;
        }
    }

    return words.join('\n');
}

function validateWordWrapArgs(str, width) {
    if (typeof str !== 'string') {
        throw new TypeError(`str argument must me string, ${typeof str} given`);
    }

    if (typeof width !== 'number') {
        throw new TypeError(`width argument must be number, ${typeof width} given`);
    }
}

// TESTS
const dedent = (str) => str.join('').replace(/\n\s+/g, '\n');

const testCases = [
    {
        actual: wordWrap('a b c def', 5),
        expected: dedent`a b c
                         def`,
    },
    {
        actual: wordWrap('a b c def', 10),
        expected: dedent`a b c def`,
    },
    {
        actual: wordWrap('a b c def', 1),
        expected: dedent`a
                         b
                         c
                         def`,
    },
    {
        actual: wordWrap('a b c def', 3),
        expected: dedent`a b
                         c
                         def`,
    },
    {
        actual: wordWrap('abc abc abc', 5),
        expected: dedent`abc
                         abc
                         abc`,
    },
    {
        actual: wordWrap('abcdef abcde abc def', 5),
        expected: dedent`abcdef
                         abcde
                         abc
                         def`,
    },
    {
        actual: wordWrap('', 5),
        expected: dedent``,
    },
    {
        actual: (() => {
            try {
                return wordWrap(12, 5);
            } catch (e) {
                return e.name;
            }
        })(),
        expected: 'TypeError',
    },
    {
        actual: (() => {
            try {
                return wordWrap('', 'asd');
            } catch (e) {
                return e.name;
            }
        })(),
        expected: 'TypeError',
    },
];

testCases.forEach(({ actual, expected }, index) => {
    const FgRed = '\x1b[31m';
    const FgGreen = '\x1b[32m';
    const FgReset = '\x1b[0m';
    const equal = actual === expected;
    console.log(
        `Test ${index + 1}`,
        equal ? FgGreen : FgRed,
        `${equal ? 'passed' : 'failed'}`,
        FgReset
    );
});
