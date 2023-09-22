// Function to calculate BMI and determine category
function calculateBMI(weight, height) {
  height = height / 100; // Convert height to meters

  // Check if weight and height are valid numbers
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid weight and height.");
    return;
  }

  // Calculate BMI
  const bmi = weight / (height * height);

  // Define BMI categories
  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  // Return the result
  return `Your BMI is ${bmi.toFixed(2)}, which is considered '${category}'`;
}
