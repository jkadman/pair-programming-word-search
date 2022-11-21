// use transpose to make the vertical array horizontal and find 'vertical' words
const transpose = function (matrix) {
    let newArray = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (!Array.isArray(newArray[j])) {
          newArray[j] = [];
        }
        newArray[j][i] = matrix[i][j];
      }
    }
    return newArray;
};

//created reverser function to keep code DRY
const reverser = function(input) {
    return input.split('').reverse().join('');
};

//created mapper to help refactor the function
const mapper = function(input) {
  return input.map(ls => ls.join(''));
};

const wordSearch = (letters, word) => { 
    const horizontalJoin = mapper(letters);
    const verticalJoin = transpose(mapper(letters));
    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes((word))) return true;
    }
    for (v of verticalJoin) {
        if (v.includes(word) || v.includes((word))) return true;
    }
    return false;
  };

module.exports = wordSearch
