
function connect() {
  return new Promise((resolve, reject) => {
    fetch('https://api.afp.com/v1/api/latest?access_token=62c7146b-1546-4fff-9eaf-6f20cd775b31')
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
