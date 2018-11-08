const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then(characters =>
        console.log(characters))

  }


  document.getElementById('fetch-one').onclick = function () {
    let id = document.getElementById("fetch-one1").value;
    charactersAPI.getOneRegister(id)
      .then(characters =>
        console.log(characters))
  }


  document.getElementById('delete-one').onclick = function () {
    let id2 = document.getElementById("dedeleteOneRegister <      .then(characters =>
        console.log(characters))
  }

  document.getElementById('edit-character-form').onsubmit = function () {

  }

  document.getElementById('new-character-form').onsubmit = function (e) {
    //e.preventDefault();
    charactersAPI.createOneRegister()
  }
})
