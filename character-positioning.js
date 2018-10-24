const countLetters = (input) => {
  input = input.split(' ').join('');
  let newObject = {};
  for (let i = 0; i < input.length; i++) {
    let characterToCheck = input[i];

    if (!newObject[characterToCheck]) {
      newObject[characterToCheck] = [];
    }

    newObject[characterToCheck].push(i);

  }

  return newObject;
}

console.log(countLetters("lighthouse in the house"));
