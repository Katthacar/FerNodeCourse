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
 * Promise that resolves idEmp
 * Find employe by idEmp
 * @param {*} idEmp 
 */
const getEmploye = idEmp => {
  return new Promise((resolve, reject) => {
    const dbEmp = employes.find(emp => emp.id === idEmp);
    if (!dbEmp) reject(`Employe with id ${idEmp} not exists!`);
    resolve(dbEmp);
  });
}

/**
 * Promise that resolves obj Salary
 * Find salary by emp
 * @param {*} emp 
 */
const getSalary = emp => {
  return new Promise((resolve, reject) => {
    const salary = salaries.find(sl => sl.idEmp === emp.id);
    if (!salary) reject(`Salary for emp ${emp.name} not exists!`);
    else resolve({
      salary,
      emp
    })
  });
}

/**
 * Execute Promises on cascade
 */
getEmploye(2)
  .then(data => getSalary(data))
  .then(res => console.log(`Salary for Employe: ${res.emp.name}: ${res.salary.value}`))
  .catch(err => console.log(`Err: ${err}`));

