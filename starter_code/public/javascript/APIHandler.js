class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get('http://localhost:8000/characters')
      .then(response => {
        console.log('post success');
        console.log(response.data)
        //return response.data
      })
      .catch(error => {
        console.log('Oh No! Error!');
        console.log(error)

      })

  }

  getOneRegister(id) {
    return axios.get('http://localhost:8000/characters/' + id)
      .then(response => {
        console.log('post success');
        console.log(response.data)
        response.data
      })
      .catch(error => {
        console.log('Oh No! Error!');
        console.log(error)

      })
  }



  createOneRegister() {
    const characterInfo = {
      name: document.querySelector('input[name=name]').value,
      occupation: document.querySelector('input[name=occupation]').value,
      weapon: document.querySelector('input[name=weapon]').value,
    };
    // The character is posted to the API
    axios.post('http://localhost:8000/characters/', characterInfo)
      .then(response => {
        console.log('post success');
        console.log(response.data)
        response.data
      })
      .catch(error => {
        console.log('Oh No! Error!');
        console.log(error)
      })
  }

  updateOneRegister() {

  }

  deleteOneRegister(id2) {
    return axios.delete('http://localhost:8000/characters/' + id2)
      .then(response => {
        console.log('post success');
        console.log(response.data)
        response.data
      })
      .catch(error => {
        console.log('Oh No! Error!');
        console.log(error)

      })
  }
}
