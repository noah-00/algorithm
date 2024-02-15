/*
 * @lc app=leetcode id=804 lang=typescript
 *
 * [804] Unique Morse Code Words
 */

// @lc code=start
const morse: { [key: string]: string } = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--.."
};

function uniqueMorseRepresentations(words: string[]): number {
  const transformations: Set<string> = new Set();

  for (let i = 0; i < words.length; i++) {
    let transformation = "";

    for (let j = 0; j < words[i].length; j++) {
      transformation += morse[words[i][j]];
    }

    transformations.add(transformation);
  }

  return transformations.size;
}
// @lc code=end
