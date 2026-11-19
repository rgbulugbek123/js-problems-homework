
// 3) Employee salary
// const employee = {
//   name: "Vali",
//   salary: 500,
//   experience: 3
// };

// calculateSalary(employee) funksiyasini yozing.

// Shart:
// Agar experience >= 3 boâ€˜lsa, salaryga 20% bonus qoâ€˜shilsin.
// Aks holda salary oâ€˜zgarmasin.

// Masalan:
// calculateSalary(employee);

// Natija:600


const employee = {
  name: "Vali",
  salary: 500,
  experience: 2
}

function calculateSalary(employee){
    if(employee.experience >= 3){
        employee.salary += (employee.salary / 100 * 20)
        return employee.salary
    }else{
        return "You are not experiecned enough!!!"
    }
}

console.log(calculateSalary(employee));
