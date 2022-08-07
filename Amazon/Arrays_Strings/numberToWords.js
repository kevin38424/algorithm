// Convert a non-negative integer num to its English words representation.

// Example 1:
// Input: num = 123
// Output: "One Hundred Twenty Three"

// Example 2:
// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"

// Example 3:
// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

// Constraints:
// 0 <= num <= 2^31 - 1

function numberToWords(num) {
  num = num.toString();
  const num2word = {
    0: ["Zero"],
    1: ["One"],
    2: ["Two", "Twenty"],
    3: ["Three", "Thirty"],
    4: ["Four", "Forty"],
    5: ["Five", "Fifty"],
    6: ["Six", "Sixty"],
    7: ["Seven", "Seventy"],
    8: ["Eight", "Eighty"],
    9: ["Nine", "Ninety"],
    10: ["Ten"],
    11: ["Eleven"],
    12: ["Twelve"],
    13: ["Thirteen"],
    14: ["Fourteen"],
    15: ["Fifteen"],
    16: ["Sixteen"],
    17: ["Seventeen"],
    18: ["Eighteen"],
    19: ["Nineteen"],
  };

  const unit = {
    0: "",
    1: " Thousand ",
    2: " Million ",
    3: " Billion ",
    4: " Trillion ",
  };

  if (num2word[num]) return num2word[num][0];

  let result = "";
  let subResult = "";
  let counter = 0;
  while (num.length) {
    let numStr = num.slice(-3);

    console.log(numStr);
    if (numStr.length === 1) numStr = "00" + numStr;
    if (numStr.length === 2) numStr = "0" + numStr;

    for (let i = 0; i < numStr.length; i++) {
      if (i === 0) {
        if (numStr[i] === "0") {
          continue;
        }
        if (numStr[i + 1] === "0" && numStr[i + 2] === "0") {
          subResult = subResult.concat(
            num2word[numStr[i]][0] + " Hundred" + unit[counter]
          );
        } else {
          subResult = subResult.concat(num2word[numStr[i]][0] + " Hundred ");
        }
      } else if (i === 1) {
        if (numStr[i] === "0") continue;
        if (numStr[i] === "1") {
          subResult = subResult.concat(
            num2word[numStr[i] + numStr[i + 1]] + unit[counter]
          );
          break;
        } else if (numStr[i + 1] === "0") {
          subResult = subResult.concat(num2word[numStr[i]][1] + unit[counter]);
        } else {
          subResult = subResult.concat(num2word[numStr[i]][1] + " ");
        }
      } else if (i === 2) {
        if (numStr[i] === "0") continue;
        subResult = subResult.concat(num2word[numStr[i]][0] + unit[counter]);
      }
    }
    result = subResult.concat(result);
    num = num.slice(0, -3);
    subResult = "";
    counter++;
  }

  return result.trim();
}

console.log(numberToWords(12456));
