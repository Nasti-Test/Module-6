function isPalindrome(word) {
  const normalized = word.toLowerCase().replace("\s+/g, ");
  const reversed = normalized.split(").reverse().join(");
  return normalized === reversed;
}

const words = [
  "Довод",
  "Сантимент",
  "А роза упала на лапу Азора"
];

words.forEach(word => { 
  if (isPalindrome(word)) {
     console.log(`Слово "${word}" является палиндромом`);
  } else {
     console.log(`Слово "${word}" не является палиндромом`);
  }
});