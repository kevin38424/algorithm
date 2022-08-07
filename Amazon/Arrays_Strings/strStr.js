// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

/* Initial Solution
const strStr = (haystack, needle) => {
  if (needle.length === 0) return 0;
  if (haystack.length < needle.length) return -1;

  let counter = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] === needle[j]) {
          console.log(needle[j]);
          counter++;
          if (counter === needle.length) return i;
        } else {
          counter = 0;
          break;
        }
      }
    }
  }
  return -1;
};
*/

const strStr = function (haystack, needle) {
  if (!needle.length || !haystack.length) return 0;
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      const str = haystack.substring(i, i + needle.length);
      if (str === needle) return i;
    }
  }
  return -1;
};

console.log(strStr("babba", "bbb"));
