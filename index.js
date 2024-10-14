const userInput = prompt(`Please enter numbers separated by commas`, `5,12,33,2`);

const userNumbers = userInput.split(`,`);

const arrayNumbers = [];

for(let index=0; index < userNumbers.length; index = index + 1) {
  const setNumber = Number(userNumbers[index]);
  arrayNumbers.push(setNumber);
}


// Length Function

const getLength = (array) => {
  length = array.length;
  return length;
}

getLength(arrayNumbers);
console.log(length);


//Sum Function

  