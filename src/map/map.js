export const arr = [1, 2, 3];

// forma imperativa => estou falando para o código como fazer
const map = (arr, func) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i], i, arr));
  }

  return newArr;
};

export default map;
