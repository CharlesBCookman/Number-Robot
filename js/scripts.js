function robotFunction(number){
  // if(number === (1/0)){
  //   return ;
  // } else 
  if(isNaN(number)){
    return "Error-Error-Error This is NOT a Number over over over over OVERHEATING!!!! Placing feet into pool, feeding fish, taking off sweater. Taking off slippers and putting on shoes and taking a long walk. (Five minutes later) Getting water and snack. Please input a number.";
  } else if(number < 0){
    number = (number * -1);
  } else {
    //NOTHING!!! MUAH HA HA HA HA HA!!!
  }
  let output = ""
  let array = []
  for(let i = 0; i <= number; i++){
    if(i.toString().includes("3")){
      array.push("Wont you be my neighbor?");
    } else 
    if(i.toString().includes("2")){
      array.push("Boop!");
    } else if(i.toString().includes("1")){
      array.push("Beep!");
    } else {
      array.push(i);
    }
  }
  output = array.join(", ")
  return output;
}