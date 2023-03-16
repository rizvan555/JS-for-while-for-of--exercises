let words = [
  "hallo",
  "Auto",
  "Waschmaschine",
  "Schrank",
  "Katze",
  "Beispiel",
  "Eltern",
  "Fenster",
  "Geburtstag",
  "Himmel",
  "schwimmen",
  "Zeitung",
];
const filterWords = () => {
  const inputLength = document.querySelector("#inputLength");
  const result = document.querySelector("#result");

  const length = inputLength.value;
  const resultFilter = words.filter((word) => word.length === length);
  result.innerHTML = resultFilter;
};

const addWord = () => {
  const addWordInput = document.querySelector("#addNewWord");
  const word = addWordInput.value;
  if (word) {
    words.push(word);
    addWordInput.value = "";
  }
  console.log(words);
};
