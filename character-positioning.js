const countLetters = (input) => {
  input = input.split(' ').join('');
  let newObject = {};
  for (let i = 0; i < input.length; i++) {
    let characterToCheck = input[i];
    // let characterIndices = [];

    // if (!newObject[characterToCheck]) {
    //   for (let j = 0; j < input.length; j++) {
    //     if (input[j] === characterToCheck) {
    //       characterIndices.push(j);
    //     }
    //   }
    //   newObject[characterToCheck] = characterIndices;
    // }

    if (!newObject[characterToCheck]) {
      newObject[characterToCheck] = [];
    }

    newObject[characterToCheck].push(i);

  }

  return newObject;
}

console.log(countLetters("lighthouse in the house"));
