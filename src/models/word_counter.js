const WordCounter = function(text){
  let textCount = text.replace(/\n/," ");
  return textCount.split(' ').length;
};

export default WordCounter;
