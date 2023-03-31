function robotFunction(number){
  let output = ""
  let array = []
  for(let i = 0; i <= number; i++){
    if(i.toString().includes("1")){
      array.push("Beep!");
    } else {
      array.push(i);
    }
  }
  output = array.join(", ")
  return output;
}