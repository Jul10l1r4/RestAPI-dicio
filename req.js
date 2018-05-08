fetch(
  `https://atheckos.github.io/api/dicio/algoz.json`
  ).then((resposta) => {
    return resposta.text() // Transformando a resposta em texto
  }).then((text) => {
      return inf(JSON.parse(text))
  })
const inf = (buff) => {
  alert(buff.Title)
  if(buff.Response === "True"){
    let titulo = buff.Title
    let saap = buff.SAAP
    let source = buff.Source
    let descricao = buff.Description
    let fig = buff.Figurative
    let plural = buff.Plural
    let exemplo = buff.Exemple
    let otros = buff.Other
    let msg = "sucesso"
    exibir(buff)
  }else{
    let msg = "fudeu"
  }
  return msg
}
const exibir = (x) => {
  document.querySelector("body").innerHTML = `${x.Title},${x.SAAP},${x.Source},${x.Description}`
}
