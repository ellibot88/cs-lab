const perf = require("execution-time")();

//1. Sum Zero

const sumZero = (arr) => {
  let newArr = arr.slice(0, 1);
  console.log(newArr);
  let addToZero = false;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[j]);

      if (i === j) {
      } else if (arr[i] + arr[j] === 0) {
        console.log(arr[j]);
        addToZero = true;
      }
    }
  }
  return addToZero;
};

console.log(sumZero([5, 5, 4, 1, 2, 3, 5]));

//2. Unique Characters

const unique = (word) => {
  let answer = true;

  // letters = word.split('')
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        answer = false;
      }
    }
  }
  return answer;
};

console.log(unique("Elliott"));

//3. Pangram Sentence
//length of sentence should be greater than 26 words

const pangrams = (str) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let regex = /\s/g;
  let lowercase = str.toLowerCase().replace(regex, "");

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
      return "not pangram";
    }
  }

  return "pangram";
};

console.log(pangrams("The quick brown fox jumps over the lazy dog"));

//4. Longest word

const longestWord = (arr) => {
  let longest = arr[0].length;
  console.log(longest);
  for (let i = 1; i < arr.length; i++) {
    if (longest < arr[i].length) {
      longest = arr[i].length;
    }
  }
  return longest;
};

console.log(longestWord(["hi", "hello", "what the literal"]));

//Perf

perf.start();
sumZero([5, 5, 4, 1, 2, 3, 5]);
let resultAddtoZero = perf.stop();

perf.start();
unique("Eliot");
let resultUnique = perf.stop();

perf.start();
pangrams("The quick brown fox jumps over the lazy dog");
let resultPangrams = perf.stop();

perf.start();
longestWord(["hi", "hello", "what the literal"]);
let resultLongestWord = perf.stop();

console.log("Add Zero:", resultAddtoZero.preciseWords);
console.log("Unique:", resultUnique.preciseWords);
console.log("Pangram:", resultPangrams.preciseWords);
console.log("Longest Word:", resultLongestWord.preciseWords);
