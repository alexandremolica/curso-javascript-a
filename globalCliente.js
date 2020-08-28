require('./global')

console.log(minhaApp.saudacao())

// não consegue trocar porque usei object.freeze
minhaApp.nome = 'Eita!'

console.log(minhaApp.nome)