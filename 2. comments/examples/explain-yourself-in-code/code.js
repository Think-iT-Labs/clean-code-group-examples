const HOURLY_FLAG = process.env.HOURLY_FLAG;
const employee = {
  flags: true,
  age: 70,
};

// Check if employee is eligible for for full benefits
if (employee.flags && HOURLY_FLAG && employee.age > 60) {
  console.log("I am eligible");
}
