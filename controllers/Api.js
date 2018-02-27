
function connect() {
  return new Promise((resolve, reject) => {
    fetch('https://api.afp.com/v1/api/latest?access_token=c3c7e9a4-ff5b-4d82-87fa-67ee48fdaa56')
      .then(response => {
        if (response.status === 200) {
          resolve(response)
        } else {
          reject()
          throw new Error('Something went wrong on api server!');
        }
      })
  })
}

export default {
  connect
}
