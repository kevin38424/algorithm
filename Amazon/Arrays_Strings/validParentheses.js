// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

function isValid(s) {
  const parentheses = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(parentheses[char]);
      continue;
    } else {
      if (char !== stack[stack.length - 1]) return false;
      stack.pop();
    }
  }

  if (stack.length) return false;
  return true;
}

console.log(isValid("()"));
