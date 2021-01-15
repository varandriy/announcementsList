export const getWords = (sentence) => {
  return sentence.split(/s+/);
};

export const getAmountOfSameWords = (a, b) => {
  let count = 0;

  for (const word of a) {
    count += b.includes(word) ? 1 : 0;
  }

  return count;
};
