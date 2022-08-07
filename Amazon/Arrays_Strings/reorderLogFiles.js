// You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

// There are two types of logs:
// Letter-logs: All words (except the identifier) consist of lowercase English letters.
// Digit-logs: All words (except the identifier) consist of digits.
// Reorder these logs so that:

// The letter-logs come before all digit-logs.
// The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
// The digit-logs maintain their relative ordering.
// Return the final order of the logs.

// Example 1:
// Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// Explanation:
// The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
// The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".

// Example 2:
// Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
// Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

// Constraints:
// 1 <= logs.length <= 100
// 3 <= logs[i].length <= 100
// All the tokens of logs[i] are separated by a single space.
// logs[i] is guaranteed to have an identifier and at least one word after the identifier.

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const digitLogs = [];
  const letterLogs = [];

  for (const log of logs) {
    if (isNum(body(log))) digitLogs.push(log);
    else letterLogs.push(log);
  }

  return [...letterLogs.sort(compare), ...digitLogs];
};

//첫 제목 뒤 나머지들 구축하기
function body(log) {
  return log.slice(log.indexOf(" ") + 1);
}

//숫자인지 체크
function isNum(log) {
  return /[0-9]/.test(log);
}

//localeCompare는 앞 엘리먼트와 뒤 엘리먼트 순위를 비교함. 같을시에는 0을 리턴하는데, 그럴경우 제목으로 순서를 정해줌.
function compare(a, b) {
  const n = body(a).localeCompare(body(b));
  if (n !== 0) return n;
  return a.localeCompare(b);
}

const logs = [
  "a1 9 2 3 1",
  "g1 act car",
  "zo4 4 7",
  "ab1 off key dog",
  "a8 act zoo",
];
console.log(reorderLogFiles(logs));
