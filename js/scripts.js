function robotFunction(number){
  let output = ""
  let array = []
  for(let i = 0; i <= number; i++){
    array.push(i);
  }
  output = array.join(", ")
  return output;
}