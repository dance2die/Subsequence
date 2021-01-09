# Subsequence

An NPM package for checking if an array is a [subsequence](https://en.wikipedia.org/wiki/Subsequence) of another array.

# Usage

```js
const subsequence = require('@dance2die/subsequence');

const input = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

const isSubsequence = subsequence.validate(sequence, input)
console.info(isSubsequence);
// prints "true"

// You can validate a Common Subsequence of X and Y
// https://en.wikipedia.org/wiki/Subsequence#Common_subsequence
const x = ['a', 'c', 'b', 'd', 'e', 'g', 'c', 'e', 'd', 'b', 'g'];
const y = ['b', 'e', 'g', 'c', 'f', 'e', 'u', 'b', 'k'];
const z = ['b', 'e', 'e' ]

const isCommonSubsequence = subsequence.validate(z, x, y)
```

