function wrapLines(words, maxLength) {
  let array = [];
  let str = "";

  for (let i = 0; i < words.length; i++) {
    if (str.length === 0) {
      str = str.concat(words[i]);
    } else if (str.length + words[i].length + 1 <= maxLength) {
      str = str.concat("-").concat(words[i]);
    } else {
      array.push(str);
      str = words[i];
    }
  }

  if (str.length) array.push(str);

  return array;
}

console.log(
  wrapLines(["1p3acres", "is", "a", "good", "place", "to", "communicate"], 12)
);
