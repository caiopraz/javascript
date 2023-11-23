var agora = new Date() //variavel para pegar a HORA do sistema
var h = agora.getHours() 
console.log(`Agora são exatamente ${h}h.`)
if (h < 12) {
    console.log('Bom dia.')
} else if (h <= 18) {
    console.log('Boa tarde.')
} else {
    console.log('Boa noite.')
}
    
