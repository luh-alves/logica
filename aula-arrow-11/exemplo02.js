// function esvaziarXicara() {
//     console.log(`xicara vazia!`)
// }

function xicaraFurada(esvaziarXicara) {
    esvaziarXicara()
}
//mesma coisa do exemplo comentado
//xicaraFurada(() => {console.log(`Xicara Vazia`)})
//posso passar varias coisas posso fazer codigo
xicaraFurada(() => {
    var noe = 'luciana'
    console.log(`Aluna ${noe}`)
    console.log(`Xicara Vazia`)
})