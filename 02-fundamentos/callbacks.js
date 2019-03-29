// setTimeout(() => {
//   console.log('Hello World');
// }, 3000);

const getUserById = (id, callback) => {

  const user = {
    id,
    name: 'Hader',
  }

  if (id === 20)
    callback(`User with id ${id} not exists!`);
  else
    callback(null, user);

}

getUserById(20, (err, user) => {
  if (err) throw(`Err: `, err);
  console.log('DB User:', user);
});
