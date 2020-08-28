const moduloA = require('../../moduloA')

console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

// Nao precisa referenciar o arquivo index, pois é o padrao
const c = require('./pastaC')
console.log(c.ola2)

//usando modulo interno do node  "http"
// Arrow function com dois parametros
// fica escutando na porta 8080 (navegador)
// dá msg de bom dia
// obs: ctrl alt m  para parar execucao do codigo
// obs: no navegador localhost:8080 
const http = require('http')

http.createServer((req, res) => {
  res.write('bom dia!')
  res.end()
}).listen(8080)