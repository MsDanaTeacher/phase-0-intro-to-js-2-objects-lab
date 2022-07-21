const employee = {name: 'Sam'};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    delete employee[key];
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    delete newEmployee[key];
    return newEmployee;
}