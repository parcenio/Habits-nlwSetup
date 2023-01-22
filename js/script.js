const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

// const data = {
//   run: [],
//   water: ["01-02"],
//   food: ["01-07", "01-08", "01-09"],
//   read: ["01-03", "01-06"],
//   study: ["01-04", "01-05"],
//   programming: [],
// }
button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExist = nlwSetup.dayExists(today)
  if (dayExist) {
    alert("Dia já incluso!❌")
    return
  }
  alert("Dia adicionado com sucesso! ✅")
  nlwSetup.addDay(today)
}
function save() {
  //cria um armazenamento local no navegador para salvar os dados, o primeiro argumento é nome do local Storage, segundo argumento são os dados, sempre deve ser uma string
  localStorage.setItem("Habits@NlwSetupArcenio", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("Habits@NlwSetupArcenio")) || {}

nlwSetup.setData(data)
nlwSetup.load()
