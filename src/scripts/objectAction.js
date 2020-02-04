export const formatObjects = (letter, array) => {
  const newObject = {
    answer: letter,
    hidden: "-",
    reveal: false
  };
  return array.push(newObject);
};

export const arrayOfObjects = array => {
  const arrayOfObjects = [];
  array.forEach(element => {
    formatObjects(element, arrayOfObjects);
  });
  return arrayOfObjects;
};

export const setArrayofObjects = word => {
  let wordArray = Array.from(word);
  let formatArrayOfObjects = arrayOfObjects(wordArray);
  return formatArrayOfObjects;
};
