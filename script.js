class Calculadora {
    constructor() {
        this.historico = []
    }
    salvarHistorico(num1, num2, resultado, operador) {
        this.historico.push(`${num1} ${operador} ${num2} = ${resultado}`)
    }
    somar(num1, num2) {
        let result = num1 + num2
        this.salvarHistorico(num1, num2, result, '+')
        return result
    }
    subtracao(num1, num2) {
        let result = num1 - num2
        this.salvarHistorico(num1, num2, result, '-')
        return result
    }
    divisao(num1, num2) {
        let result = num1 / num2
        this.salvarHistorico(num1, num2, result, '/')
        return result
    }
    multiplicacao(num1, num2) {
        let result = num1 * num2
        this.salvarHistorico(num1, num2, result, '*')
        return result
    }
}
const contas = new Calculadora()
contas.multiplicacao(10, 2)
contas.somar(10, 2)
contas.subtracao(10, 2)
contas.divisao(10, 2)
console.log(contas.historico)

class ContaBancaria {
    constructor(numero, titular, saldo, limite) {
        this._numero = numero
        this._titular = titular
        this._saldo = saldo
        this._limite = limite
    }
    get numero() {
        return this.numero
    }
    set numero(newNum) {
        return this.numero = newNum
    }
    get titular() {
        return this.titular
    }
    set titular(newTitular) {
        return this.titular = newTitular
    }
    get saldo() {
        return this.saldo
    }
    set saldo(newSaldo) {
        return this.saldo = newSaldo
    }
    get limite() {
        return this.limite
    }
    set limite(newLimite) {
        return this.limite = newLimite
    }
    depositar(valor) {
        this._saldo += valor
    }
    sacar(valor) {
        this._saldo -= valor
        return valor
    }
    imprimirDados() {
        return `A conta de número ${this._numero} de ${this._titular} possui um saldo de R$${this._saldo} e um limite de ${this._limite}.`
    }
}
const pedro = new ContaBancaria('12345-40', 'Pedro Flausino', 100, 2000)
pedro.depositar(900)
console.log(pedro.imprimirDados())
pedro.sacar(500)
console.log(pedro.imprimirDados())


class Slenzie {
    constructor(nomeEvento) {
        this.nomeEvento = nomeEvento
        this.perguntas = []
        this.perguntasArquivadas = []
    }
    adicionarPergunta(pergunta) {
        this.perguntas.push(pergunta)
    }
    arquivarPergunta() {
        let perguntaRemovida = this.perguntas.pop()
        this.perguntasArquivadas.push(perguntaRemovida)
    }
    votarPergunta(posicao) {
        this.perguntas[posicao].votos++
    }
    reativarPergunta(posicao){
        let newArr = []
        let perguntaSelecionada = this.perguntasArquivadas.find(Element => Element === this.perguntasArquivadas[posicao])
        this.perguntasArquivadas.forEach(element => {
          if(perguntaSelecionada !== element){
            newArr.push(element)
          }  
        })
        this.perguntas.push(perguntaSelecionada)
        this.perguntasArquivadas = newArr
    }
}
const poo = new Slenzie('POO')
poo.adicionarPergunta({ nome: 'Pedro', pergunta: 'Fopdase', votos: 9 })
poo.adicionarPergunta({ nome: 'Larissa', pergunta: 'Isso ai amir', votos: 22 })
poo.adicionarPergunta({ nome: 'Larissa', pergunta: 'Vsfd amir', votos: 45 })
poo.adicionarPergunta({ nome: 'Larissa', pergunta: 'sexo amir?', votos: 4 })
poo.adicionarPergunta({ nome: 'Larissa', pergunta: 'amir?', votos: 59 })
poo.arquivarPergunta()
poo.arquivarPergunta()
console.log(poo.perguntas)
console.log(poo.perguntasArquivadas)
poo.reativarPergunta(1)
console.log(poo.perguntas)
console.log(poo.perguntasArquivadas)