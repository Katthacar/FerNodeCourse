const employes = [
  {
    id: 1,
    name: 'Hader'
  },
  {
    id: 2,
    name: 'Katy'
  },
  {
    id: 3,
    name: 'Candyta'
  },
  {
    id: 4,
    name: 'Negrito'
  },
];

const salaries = [
  {
    idEmp: 1,
    value: 1000
  },
  {
    idEmp: 2,
    value: 2000
  },
];

/**
 * Get Employe by id
 * @param {*} id 
 * @param {*} callback 
 */
const getEmploye = (id, callback) => {
  const objEmp = employes.find(emp => emp.id === id);
  if (!objEmp) callback(`Employe with id ${id} not exists`);
  else callback(null, objEmp);
}

/**
 * Get Salary by Employe
 * @param {*} emp 
 * @param {*} callback 
 */
const getSalary = (emp, callback) => {
  const salary = salaries.find(sl => sl.idEmp === emp.id);
  if (!salary) callback(`Salary for employe with id ${emp.id} not exists`)
  else callback(null, {
    salary: salary.value,
    employe: emp
  });
}

// getEmploye(5, (err, objEmp) => {
//   if (err) throw (`Err: ${err}`);
//   console.log(`Empleado: ${JSON.stringify(objEmp)}`);
// });

getEmploye(3, (err, objEmp) => {
  if (err) throw (`Err: ${err}`);
  console.log(`Empleado: ${JSON.stringify(objEmp)}`);
  getSalary(objEmp, (err, result) => {
    if (err) throw (`Employe with id ${objEmp.id} and name ${objEmp.name} has no Salary`);
    console.log(`Salary for emp with id (${result.employe.id}) and name (${result.employe.name}) = $${result.salary}`);
  })
});
