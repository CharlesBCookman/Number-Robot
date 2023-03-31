function robotFunction(number){
  if(number === null){
    return "Um... null isn't a number... can you give me a number?";
  } else 
  if(isFinite(number) === false){
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

window.addEventListener("load", () => {
  const inputForm = document.querySelector("form");
  const inputElement = document.querySelector("#input");
  const output = document.querySelector("#output");
  inputForm.addEventListener("submit", (event) => {
    output.innerText = robotFunction(inputElement.value);
    event.preventDefault();
  })
})