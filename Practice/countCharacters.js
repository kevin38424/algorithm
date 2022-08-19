// 1160. Find Words That Can Be Formed by Characters
// Easy
// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars (each character can only be used once).
// Return the sum of lengths of all good strings in words.

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

function countCharacters(words, chars) {
  let totalLength = 0;
  const track = {};
  for (let i = 0; i < chars.length; i++) {
    if (!track[chars[i]]) track[chars[i]] = 0;
    track[chars[i]]++;
  }
  console.log(track);

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    const copy = { ...track };
    for (let j = 0; j < word.length; j++) {
      if (!copy[word[j]]) break;

      if (copy[word[j]] > 0) {
        copy[word[j]]--;
      } else {
        break;
      }
      if (j === word.length - 1) totalLength += word.length;
    }
  }
  return totalLength;
}

console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
