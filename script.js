function manipulateData(inputArray) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  })
  .then((array) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const evenNumbers = array.filter((num) => num % 2 === 0);
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map((num) => num * 2);
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .then((resultArray) => {
    const outputElement = document.getElementById('output');
    outputElement.textContent = resultArray.join(', ');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}