
function connect() {
  return new Promise((resolve, reject) => {
    fetch('https://api.afp.com/v1/api/latest?access_token=7bf8a2c5-6c4b-4335-9c6d-9c25bf345b0a')
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
