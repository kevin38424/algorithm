// LeetCode 409. Longest Palindrome
// Easy

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) obj[s[i]] = 0;
    obj[s[i]]++;
  }
  let sum = 0;
  let odd = false;
  for (let count of Object.values(obj)) {
    if (count % 2 === 0) sum += count;
    if (count % 2 === 1) {
      sum += count - 1;
      odd = true;
    }
  }
  if (odd) return sum + 1;
  return sum;
};
