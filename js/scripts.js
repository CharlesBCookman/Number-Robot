function robotFunction(number){
  if(isNaN(number)){
    return "Error-Error-Error This is NOT a Number over over over over OVERHEATING!!!! Placing feet into pool, feeding fish, taking off sweater. Taking off slippers and putting on shoes and taking a long walk. (Five minutes later) Getting water and snack. Please input a number.";
  } else if(isFinite(number) === false){
    return [["Beep!"], ["Boop!"], ["Won't you be my neighbor?"], ["Infinity!"]].join(", ");
  } else if(number < 0){
    number = (number * -1);
  } else {
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
}