// Uso de file system que é core do node.js 
const fs = require('fs')

//__dirname constante presente nos modulos do nodes.js que representa o diretorio atual
const caminho = __dirname + '/arquivo.json'

//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assicrona - no caso pode ser executado por ultimo
fs.readFile(caminho,'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})
// para o formato JSON tem forma mais simples
const config = require('./arquivo.json')
console.log(config.db)

// para ler diretorio, pode usar fs
fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})
