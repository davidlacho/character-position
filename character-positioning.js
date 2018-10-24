countLetters = (input) => {
  input = input.split(' ').join('');
  let returnObject = {}
  for (i = 0; i < input.length; i++) {
    let characterToCheck = input[i];
    let characterIndices = [];
    for (j = 0; j < input.length; j++) {
      if (input[j] === characterToCheck) {
        characterIndices.push(j)
      }
    }
    returnObject[characterToCheck] = characterIndices;
  }

  return returnObject;
}


console.log(countLetters("lighthouse in the house"));
