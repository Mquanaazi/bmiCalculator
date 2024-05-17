function calculateBMI() {
    let heightInput = document.getElementById("height");
    let weightInput = document.getElementById("weight");
    let span=document.querySelector('#result')
   
  
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);
  
    if (isNaN(height) || isNaN(weight)) {
      span.innerText = "Please enter valid height and weight.";
      return;
    }
  
    let bmi = weight / ((height / 100) ** 2);
    let category = "";
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    span.innerText = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
  }

  
  function calculateBMI() {
    let heightInput = document.getElementById("height");
    let weightInput = document.getElementById("weight");
    let span = document.querySelector('#result')
  
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);
  
    if (isNaN(height) || isNaN(weight)) {
      span.innerText = "Please enter valid height and weight.";
      return;
    }
  
    let bmi = weight / ((height / 100) ** 2);
    let category = "";
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
    function calculation(value1,value2) {
         
    let calculation = document.querySelector('button')

    span.innerText += "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
  }
  calculation=addEventListener('click'(calculateBMI))
}