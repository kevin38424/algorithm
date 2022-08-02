// LeetCode 383. Ransom Note
// Easy

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let obj = {};
  for (let i = 0; i < magazine.length; i++) {
    if (!obj[magazine[i]]) obj[magazine[i]] = 0;
    obj[magazine[i]]++;
  }

  for (let j = 0; j < ransomNote.length; j++) {
    if (!obj[ransomNote[j]]) return false;
    obj[ransomNote[j]]--;
  }
  return true;
};

console.log(canConstruct("a", "a"));
