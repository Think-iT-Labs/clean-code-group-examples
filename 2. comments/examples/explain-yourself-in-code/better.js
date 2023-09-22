const HOURLY_FLAG = process.env.HOURLY_FLAG;
const employee = {
  flags: true,
  age: 70,
  isEligibleForFullBenefits: () => this.flags && HOURLY_FLAG && this.age > 60,
};
if (employee.isEligibleForFullBenefits()) {
  console.log("I am eligible");
}
