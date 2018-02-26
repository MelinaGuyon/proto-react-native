
function connect() {
  return new Promise((resolve, reject) => {
    fetch('https://api.afp.com/v1/api/latest?access_token=fc603bb1-f4f9-45a4-9d8c-74efe3b0bce4')
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
