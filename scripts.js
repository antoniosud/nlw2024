const perguntas = [
    {
        pergunta: "Quem foi o primeiro profeta a escrever no Livro de Mórmon?",
        respostas: [
            "Néfi",
            "Mórmon",
            "Morôni"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do último profeta que escreveu no Livro de Mórmon?",
        respostas: [
            "Helamã",
            "Morôni",
            "Alma"
        ],
        correta: 1
    },
    {
        pergunta: "Quantos anos aproximadamente cobre a história do Livro de Mórmon?",
        respostas: [
            "300 anos",
            "1000 anos",
            "600 anos"
        ],
        correta: 1
    },
    {
        pergunta: "Qual povo construiu o navio para viajar de Jerusalém às Américas?",
        respostas: [
            "Os lamanitas",
            "Os néfitas",
            "Os jareditas"
        ],
        correta: 1
    },
    {
        pergunta: "Quem compilou os registros do Livro de Mórmon?",
        respostas: [
            "Mórmon",
            "Morôni",
            "Néfi"
        ],
        correta: 0
    },
    {
        pergunta: "Qual civilização veio à América em uma época anterior aos néfitas?",
        respostas: [
            "Os lamanitas",
            "Os jareditas",
            "Os amalequitas"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o evento central descrito em 3 Néfi?",
        respostas: [
            "A destruição de Jerusalém",
            "A visita de Jesus Cristo às Américas",
            "A guerra final entre néfitas e lamanitas"
        ],
        correta: 1
    },
    {
        pergunta: "Quem escondeu as placas de ouro no monte Cumora?",
        respostas: [
            "Néfi",
            "Mórmon",
            "Morôni"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o propósito declarado do Livro de Mórmon na introdução?",
        respostas: [
            "Ensinar sobre profecias do Velho Testamento",
            "Convidar todos a vir a Cristo",
            "Explicar a história de Israel"
        ],
        correta: 1
    },
    {
        pergunta: "Em que língua foram originalmente escritas as placas do Livro de Mórmon?",
        respostas: [
            "Egípcio reformado",
            "Hebraico antigo",
            "Latim"
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

