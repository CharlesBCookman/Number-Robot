function robotFunction(number){
  if(number < 0){
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