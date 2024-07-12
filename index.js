// Write your solution in this file!
const employee = {
  name: 'John Doe',
  streetAddress: '123 Main St'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}
function deleteFromEmployeeByKey(employee, key) {
  const newObj = { ...employee };
  delete newObj[key];
  return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
