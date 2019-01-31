function getCharCount(ranges){
  return ranges.reduce((a, range)=> {
    charCount=range[1]-range[0];
    return a + charCount;
  },0)
}

function getArrayGreaterThanHundred(languages){
  return languages.filter((scripts)=> getCharCount(scripts.ranges)>100)
}

console.log(getArrayGreaterThanHundred(SCRIPTS));
