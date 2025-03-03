const perguntas = [
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const"
        ],
        correta: 1
    },
    {
        pergunta: "Qual desses métodos é usado para adicionar um elemento ao final de um array?",
        respostas: [
            "push()",
            "pop()",
            "shift()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
        respostas: [
            "-- Comentário",
            "// Comentário",
            "/* Comentário */"
        ],
        correta: 1
    },
    {
        pergunta: "Qual operador é usado para comparar valores e tipos em JavaScript?",
        respostas: [
            "==",
            "!=",
            "==="
        ],
        correta: 2
    },
    {
        pergunta: "Como declarar uma função em JavaScript?",
        respostas: [
            "function minhaFuncao() {}",
            "def minhaFuncao() {}",
            "fun minhaFuncao() {}"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'typeof' retorna para um array?",
        respostas: [
            "'array'",
            "'object'",
            "'list'"
        ],
        correta: 1
    },
    {
        pergunta: "Qual dessas estruturas de controle é usada para repetição?",
        respostas: [
            "if",
            "for",
            "switch"
        ],
        correta: 1
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número inteiro?",
        respostas: [
            "parseInt()",
            "parseFloat()",
            "Number()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array?",
        respostas: [
            "pop()",
            "shift()",
            "splice()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual destas declarações sobre 'null' e 'undefined' está correta?",
        respostas: [
            "Ambos significam ausência de valor, mas 'null' é atribuído manualmente",
            "Ambos são exatamente iguais e intercambiáveis",
            "'undefined' é um valor válido atribuído manualmente"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for (const item of perguntas){

    const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
    

    for (let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', '´pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

            

        }


        quizItem.querySelector('dl').appendChild(dt)
    
    }

    quizItem.querySelector('dl dt').remove()
    
    quiz.appendChild(quizItem)

}

