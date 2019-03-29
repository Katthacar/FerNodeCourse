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
 * Return a Promise that resolves objEmp
 * find employe by idEmp
 * @param {*} idEmp 
 */
const getEmploye = async idEmp => {
  const objEmp = employes.find(emp => emp.id === idEmp);
  if (!objEmp) throw (`Employe with id ${idEmp} not exists!`);
  return objEmp;
}

/**
 * Return a Promise that resolves objSalary
 * find salary by emp
 * @param {*} emp 
 */
const getSalary = async emp => {
  const salary = salaries.find(sl => sl.idEmp === emp.id);
  if (!salary) throw (`Employe ${emp.name} has no Salary!`);
  return { salary, emp };
}

/**
 * Execute promises
 */
// getEmploye(2)
//   .then(data => getSalary(data))
//   .then(res => console.log(`Salary for Employe ${res.emp.name}: ${res.salary.value}`))
//   .catch(err => console.log(err));

const getData = async (idEmp) => {
  const employe = await getEmploye(idEmp);
  const resp = await getSalary(employe);
  return `Employe ${employe.name} has a salary with value: ${resp.salary.value}`;
}

getData(5).then(data => console.log(data))
  .catch(err => console.log(err));
