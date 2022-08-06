// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.
// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

// Example 1:
// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is banned.

// Example 2:
// Input: paragraph = "a.", banned = []
// Output: "a"

// Constraints:
// 1 <= paragraph.length <= 1000
// paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
// 0 <= banned.length <= 100
// 1 <= banned[i].length <= 10
// banned[i] consists of only lowercase English letters.

/* [^a-z]+/i
The [ brackets ] signify a range of characters; specifically, a to z in this case.
Actually the i flag means insensitive to case, so that includes A to Z also.
The caret ^ inverts the pattern; it means, anything not in the specified range.
And the + means continue adding characters to the match as long as they are they within that range.
*/

function mostCommonWord(paragraph, banned) {
  const paraArr = paragraph.replace(/[^a-zA-Z ]/g, " ").split(" ");
  console.log(paraArr);
  const bannedObj = {};
  for (let ele of banned) {
    if (ele === "") continue;
    bannedObj[ele] = true;
  }

  const commonWord = {};
  let max = -Infinity;
  let result;
  for (let i = 0; i < paraArr.length; i++) {
    const word = paraArr[i].toLowerCase();
    if (bannedObj[word] || word === "") continue;

    if (!commonWord[word]) commonWord[word] = 0;
    commonWord[word]++;
    if (max < commonWord[word]) {
      max = commonWord[word];
      result = word;
    }
  }

  return result;
}

const paragraph = "a, a, a, a, b,b,b,c, c";
const banned = ["a"];
console.log(mostCommonWord(paragraph, banned));

const para = "Bob hit a ball, the hit BALL flew far after it was hit.";
const ban = ["hit"];
console.log(mostCommonWord(para, ban));
