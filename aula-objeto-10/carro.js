class Carro {
    constructor(nome, modelo, cor, velocidade) {
        this.nome = nome
        this.modelo = modelo
        this.cor = cor
        this.velocidade = 0
    }
    acelerar(){
        this.velocidade = this.velocidade + 10
        if(this.velocidade > 60){
            this.velocidade = 60
        }

    }
    freiar(){
        this.velocidade = this.velocidade - 5
        if(this.velocidade < 0){
            this.velocidade = 0
        }

    }
    desligar(){      
        return this.velocidade == 0

    }
    compararCarro(paraComparar) {
        if (this.nome == paraComparar.nome && this.modelo == paraComparar.modelo) {
            console.log('Os carros são iguais')
        } else {
            console.log('Os carros são diferentes')
        }
    }
}
module.exports = Carro