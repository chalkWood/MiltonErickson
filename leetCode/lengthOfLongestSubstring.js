/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const alter = [];
  const stringPresence = {};
  const chrArr = s.split("");
  let maxLen = 0;

  const cleanAlter = (chr) => {
    const shiftedOut = alter.shift();
    console.log("cleaning till ", chr);
    console.log("being cleaned", shiftedOut);
    if (shiftedOut !== chr) {
      stringPresence[shiftedOut] = false;
      cleanAlter(chr);
    }
  };

  for (var i = 0; i < chrArr.length; i++) {
    const chrAtTest = chrArr[i];
    if (!stringPresence[chrAtTest]) {
      stringPresence[chrAtTest] = true;
      alter.push(chrAtTest);
    } else {
      maxLen = maxLen < alter.length ? alter.length : maxLen;
      cleanAlter(chrAtTest); // while loop was giving inifinte looping on the same logic
      //TODO: test later the while loop drama
      alter.push(chrAtTest);
      stringPresence[chrAtTest] = true;
    }
  }
  maxLen = maxLen < alter.length ? alter.length : maxLen;
  return maxLen;
};
