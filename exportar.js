console.log(module.exports === this)
console.log(module.exports === exports)

//ficara visivel fora 
this.a = 1
exports.b = 2
module.exports.c = 3

// o this exports são apenas duas referencias ao module_exports
exports = null
console.log(module.exports)

exports = {
    nome: 'teste'
}
console.log(module.exports)

//obrigatoriamente usa module.exportes quando for exportar
module.exports = {publico: true  }
