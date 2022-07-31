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

function validParenthesis(str) {
    const parenthesis = {
        '(':')',
        '{':'}',
        '[':']'
    }

    const stack = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(parenthesis[char]);
        } else {
            if (char !== stack[stack.length-1]) return false;
            stack.pop();
        }
    }

    if (stack.length>0) return false;
    return true;
}

console.log(validParenthesis('()'));
console.log(validParenthesis('()()'));
console.log(validParenthesis('(())'));
console.log(validParenthesis("()[]{}"));
console.log(validParenthesis("(]"));


//TC: O(n) 
//SC: O(n)