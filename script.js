// let weight=parseInt(document.querySelector(".weight").value);
// let height=parseInt(document.querySelector(".height").value);
let form=document.querySelector("form")
// let BMI = (weight / (height * height)) * 10000;
let calculate = document.querySelector(".calculate");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let weight = parseInt(document.querySelector(".weight").value);
    let height = parseInt(document.querySelector(".height").value);
    let result = document.querySelector(".result");
  console.log("clicked");
  let BMI = (weight / ((height * height)/10000)).toFixed(2);
if(weight==="" || weight <5 || isNaN(weight) ){
    result.innerHTML =`<span>Not a valid weight </span`;

}
else if(height==="" || height <5 || isNaN(height)){
    result.innerHTML =`<span>Not a valid height </span`;

}

else
if(BMI<18.5)
{
    result.innerHTML =`<span> Your BMI is: ${BMI} (Underweight) </span`;
}
else if(BMI>18.5 && BMI <24.9)
{
    result.innerHTML =`<span> Your BMI is: ${BMI} (Normal weight) </span`;
}
else if(BMI>25 && BMI<29.9){
    result.innerHTML =`<span> Your BMI is: ${BMI} (overweight) </span`;
}
else if(BMI>30 && BMI<34.9){
    result.innerHTML =`<span> Your BMI is: ${BMI} (Moderate obesity) </span`;
}
else if(BMI>35 && BMI<39.9){
    result.innerHTML =`<span> Your BMI is: ${BMI} (Severe obesity) </span`;
}
else if(BMI>-40){
    result.innerHTML =`<span> Your BMI is: ${BMI} (very Severe obesity) </span`;
}


});
