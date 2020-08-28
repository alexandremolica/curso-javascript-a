console.log(this === global) //false
console.log(this === module) //false

console.log(this === module.exports) //true
console.log(this === exports) //true

//Dentro de uma funcao o this nao aponta para exeports e module.exports
function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports) //false
    console.log(this === module.exports) //false
    console.log(this === global) // true , dentro de funcao sim

    this.perigo = '...' //Dentro de uma funcao, cuidado pois aponta para global

}

logThis()