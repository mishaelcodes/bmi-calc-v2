// ***** setting the measurement pairs for calculation
// ***** kilograms(kg) pairs with meters(m) or centimeters(cm) and vice versa
// ***** pounds pairs with inches and vice versa
let wmt = document.getElementById("wmt");
let hmt = document.getElementById("hmt");

let metric = document.getElementById("metric");
let imperial = document.getElementById("imperial");

// ***** sets the measurement pair to the metric system
metric.addEventListener("click", () => {
  wmt.value = "kilograms";
  hmt.value = "meters";

  // ***** lets the user know that he is using the metric pair
  metric.classList.add("selected");
  imperial.classList.remove("selected");
});

// ***** sets the measurement pair to the imperial system
imperial.addEventListener("click", () => {
  wmt.value = "pounds";
  hmt.value = "inches";

  // ***** lets the user know that he is using the imperial pair
  imperial.classList.add("selected");
  metric.classList.remove("selected");
});

// ***** If changed manually by the user,
// ***** makes sure the height matches the 
// ***** measurement pair of the weight the user selected
wmt.addEventListener("change", () => {
  if (wmt.value === "kilograms") {
    hmt.value = "meters";
    // *****  lets the user know that he is using the metric pair
    metric.classList.add("selected");
    imperial.classList.remove("selected");
  } else if (wmt.value === "pounds") {
    hmt.value = "inches";
    // ***** lets the user know that he is using the imperial pair
    imperial.classList.add("selected");
    metric.classList.remove("selected");
  }
});

// ***** If changed manually by the user,
// ***** makes sure the weight matches the
// ***** measurement pair of the height the user selected
hmt.addEventListener("change", () => {
  if (hmt.value === "meters" || hmt.value === "centimeters") {
    wmt.value = "kilograms";
    // ***** lets the user know that he is using the metric pair
    metric.classList.add("selected");
    imperial.classList.remove("selected");
  } else if (hmt.value === "inches") {
    wmt.value = "pounds";
    // ***** lets the user know that he is using the imperial pair
    imperial.classList.add("selected");
    metric.classList.remove("selected");
  }
});

// ***** display result with these variables
let result = document.getElementById("result");
let bmi = document.getElementById("bmi");

// ***** button
let calculate = document.getElementById("btn");
calculate.addEventListener("click", () => {
  let userBmi;
  // ***** weight
  let weight = document.getElementById("weight").value;
  let wmt = document.getElementById("wmt").value;
  // ***** height
  let height = document.getElementById("height").value;
  let hmt = document.getElementById("hmt").value;

  // ***** calculation and error handling logic
  if (height === "" || weight === "") {
    bmi.textContent = "Incomplete data input";
    result.textContent = "Fill the empty field(s) above";
  } else if (wmt === "kilograms" && hmt === "meters") {
    userBmi = weight / height ** 2;
    userBmi = userBmi.toFixed(2); // ***** reduce to two decimal places
    bmi.textContent = `BMI: ${userBmi}`;
  } else if (wmt === "kilograms" && hmt === "centimeters") {
    userBmi = (weight / height / height) * 10000;
    userBmi = userBmi.toFixed(2); // ***** reduce to two decimal places
    bmi.textContent = `BMI: ${userBmi}`;
  } else if (wmt === "pounds" && hmt === "inches") {
    userBmi = (weight / height ** 2) * 703;
    userBmi = userBmi.toFixed(2); // ***** reduce to two decimal places
    bmi.textContent = `BMI: ${userBmi}`;
  }

  if (userBmi < 18.5) {
    result.textContent = `You are underweight.`;
  } else if (userBmi >= 18.5 && userBmi <= 24.9) {
    result.textContent = `You are of normal weight.`;
  } else if (userBmi > 24.9 && userBmi < 30) {
    result.textContent = `You are overweight.`;
  } else if (userBmi > 30) {
    result.textContent = `You are obese.`;
  }
});


let weight = document.getElementById('weight');
let height = document.getElementById('height');

weight.addEventListener('change', clearResult)
height.addEventListener('change', clearResult)

function clearResult(){
  bmi.textContent = ""
  result.textContent = ""
}

// display chart
let formContainer = document.getElementById('form-container');
let chartContainer = document.getElementById('chart-container');
let chartBtn = document.getElementById('chartBtn');
chartBtn.addEventListener('click', () => {
  formContainer.classList.toggle('hide')
  chartContainer.classList.toggle('hide')
  if(chartBtn.textContent === "Chart"){
    chartBtn.textContent = "Calculator"
  } else chartBtn.textContent = "Chart"
})