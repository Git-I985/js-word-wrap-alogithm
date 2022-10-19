# JavaScript words wraping alogithm

**Task:** _Test yourself by wrapping lines at a given number of columns without breaking words._

**Solution by:** [@karinhan](https://github.com/karinhan)

**Note:** My tests in `index.js` file

**Source preview:**

```javascript
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
```

**Note:** tests from eduactive.io
![image](https://user-images.githubusercontent.com/54438967/196451441-91cbbdc6-a052-4636-b935-4f1fe7fa681e.png)
