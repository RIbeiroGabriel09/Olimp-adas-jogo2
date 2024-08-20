let inventario = [];
let medbronze = 0;
let medprata = 0;
let medouro = 0;
let esperanca = 0;
let drogas = 0;
let hp = 100;
var energetico = 0;

inventario.push(medbronze);
inventario.push(medprata);
inventario.push(medouro);
inventario.push(esperanca);
inventario.push(drogas);
inventario.push(energetico);

if (hp === 0) {
    alert("Você morreu");
    throw new Error();
}

let capum = 0;
let capdois = 0;
let captres = 0;

let menu;
while (menu !== '1') {
    menu = prompt("1) Começar \n 2) Configurações \n 3) Créditos");
    if (menu === '2') {
        alert("Achou mesmo que um joguinho de texto vai ter configuração? kkkkkkkk");
    } else if (menu === '3') {
        alert("Produtor Executivo: Gabriel Ribeiro \nProdutor: Gabriel Ribeiro \nDiretor de Jogo: Gabriel Ribeiro \nDiretor de Projeto: Gabriel Ribeiro");
        alert("Programadores: Gabriel Ribeiro \n Designers: Gabriel Ribeiro");
        alert("Diretor de arte: Gabriel Ribeiro \n Artistas: Gabriel Ribeiro \n Animadores: Gabriel Ribeiro");
        alert("Compositores: Gabriel Ribeiro\n Designers de Som: Gabriel Ribeiro\n Engenheiros de Som: Gabriel Ribeiro \n Escritores: Gabriel Ribeiro\n Narradores: Gabriel Ribeiro");
        alert("Testadores: Gabriel Ribeiro\n Diretor de Garantia de Qualidade: Gabriel Ribeiro \n Diretor de Marketing: Gabriel Ribeiro\n Equipe de Marketing: Gabriel Ribeiro\n Diretor de Publicidade: Gabriel Ribeiro\n Consultores: Gabriel Ribeiro\n Apoio Legal: Gabriel Ribeiro\n Suporte Técnico: Gabriel Ribeiro");
        alert("Agradecimentos Especiais: \nRenato Portaluppi e todo elenco do Grêmio \nAlan Turing (pai da computaria)");
    }
}

alert("PRÓLOGO");
alert("Você controla o atleta refugiado Dorian Keletela");
alert("Tenha em mente que ele ainda é muito jovem");
alert("E ao longo da gameplay ele vai envelhecendo");
alert("No momento você está no Congo");
alert("Um lugar não muito agradável...");
alert("Por conta de guerras e conflitos");

alert("CAPÍTULO I");
capum += 1; 

let oqfzrum;
while (oqfzrum !== '1' && oqfzrum !== '2' && oqfzrum !== '3') {
    oqfzrum = prompt("O que gostaria de fazer? \n 1) Ficar em casa \n 2) Jogar bola com os amigos \n 3) Caminhar pelas ruas");
    if (oqfzrum === '1') {
        alert("Você ficou em casa curtindo");

        let jornal;
        while (jornal !== '1' && jornal !== '2') {
            alert("Você vê um jornal jogado no chão");
            jornal = prompt("Deseja ler? \n 1) Ler \n 2) Ignorar");
            if (jornal === '1') {
                alert("Você resolve ler o jornal");
                alert("E tinha uma matéria sobre atletismo");
                alert("E você gostou");
                esperanca += 2;
            } else if (jornal === '2') {
                alert("Você ignorou o jornal");
            } else {
                alert("Opção inválida");
            }
        }

    } else if (oqfzrum === '2') {
        alert("Ao sair de casa, nota que seus amigos estão jogando bola");
        alert("E enquanto jogam, vocês acabam conversando sobre o que querem fazer da vida");
        alert("E seus amigos acabam falando que ser atleta parece legal");
        esperanca += 2;
    } else if (oqfzrum === '3') {
        alert("Você decide caminhar nas ruas do Congo... algo não muito seguro");
    } else {
        alert("Opção inválida");
    }
}

const rngum = Math.ceil(Math.random() * 10);
if (rngum >= 1 && rngum <= 5 && oqfzrum == '3') {
    alert("Que azar...");
    alert("Ao sair na rua...");
    alert("Você foi atingido por uma bala perdida...");
    const rngdois = Math.ceil(Math.random() * 3);
    if (rngdois === 1) {
        alert("E foi fatal");
        alert("Eu deixei claro que o Congo não era seguro");
        hp -= 100;
    } else {
        alert("Mas por sorte sobreviveu");
        hp -= 70;
    }
}

let achdorg;
if (achdorg === '3' && achdorg >= 6) {
    const achdrog = Math.ceil(Math.random() * 2);
}
if (achdorg === 1) {
    alert("Você achou algo questionável no chão enquanto caminha");
    alert("Você decide ler, e são drogas que ajudam no metabolismo");
    let levardrogas = prompt("Deseja levar? \n1)Sim \n2)Não");
    if (levardrogas === '1') {
        drogas += 1;
    }
}

let voltarcasa;
if (oqfzrum === '3') {
    voltarcasa = prompt("Deseja voltar pra casa? \n1)Sim \n2)Não");
    if (voltarcasa === '1') {
        alert("Você voltou pra casa");
        let descansovolta = prompt("Deseja descansar? \n1)Sim \n2)Não");
        if (descansovolta === '1') {
            alert("Você decide dormir");
            alert("E pega no sono");
            alert("E você teve um sonho");
            alert("Em que você era um atleta profissional");
            esperanca += 2;
            hp += 10;
        } else if (descansovolta === '2') {
            alert("Querendo ou não, você acaba pegando no sono");
            alert("E você teve um sonho");
            alert("Em que você era um atleta profissional");
            esperanca += 1;
            hp += 10;
        }
    }
}


alert("CAPÍTULO II");
capdois += 1;
alert("Os conflitos no Congo ficaram mais intensos");
alert("E você foi obrigado a fugir pra outro país");
alert("No caso, Portugal");

if (esperanca >= 1) {
    alert("E você decide treinar atletismo");
} else {
    alert("Mas você não teve esperança para nada");
    alert("E ficou sem objetivos");
    alert("Bad Ending");
    throw new Error();
}

if (esperanca >= 1) {
    var atributos = {
        hp: 100,
        aceleracao: 35,
        velmax: 40,
        impusao: 45,
        folego: 25,
        energia: 100,
    };

    function treinar() {
        while (true) {
            if (atributos.energia < 5) {
                alert("Você não tem energia suficiente para treinar.");
                return;
            }

            let treino = prompt("Qual ação deseja realizar? \n 1) Treinar Aceleração \n 2) Treinar Velocidade Máxima \n 3) Treinar Impulsão \n 4) Treinar Fôlego \n 5) Mostrar Status \n 6) Parar de Treinar");

            switch (treino) {
                case '1':
                    atributos.aceleracao += 5;
                    atributos.energia -= 5;
                    alert("Você treinou Aceleração! \nAceleração: " + atributos.aceleracao + "\nEnergia restante: " + atributos.energia);
                    break;
                case '2':
                    atributos.velmax += 5;
                    atributos.energia -= 5;
                    alert("Você treinou Velocidade Máxima! \nVelocidade Máxima: " + atributos.velmax + "\nEnergia restante: " + atributos.energia);
                    break;
                case '3':
                    atributos.impusao += 5;
                    atributos.energia -= 5;
                    alert("Você treinou Impulsão! \nImpulsão: " + atributos.impusao + "\nEnergia restante: " + atributos.energia);
                    break;
                case '4':
                    atributos.folego += 5;
                    atributos.energia -= 5;
                    alert("Você treinou Fôlego! \nFôlego: " + atributos.folego + "\nEnergia restante: " + atributos.energia);
                    break;
                case '5':
                    alert("Status Atual: \nHP: " + atributos.hp + "\nAceleração: " + atributos.aceleracao + "\nVelocidade Máxima: " + atributos.velmax + "\nImpulsão: " + atributos.impusao + "\nFôlego: " + atributos.folego + "\nEnergia: " + atributos.energia);
                    break;
                case '6':
                    alert("Você decidiu parar de treinar.");
                    return;
                default:
                    alert("Opção inválida, tente novamente.");
                    break;
            }
        }
    }

    treinar();
}
let usarcell = prompt("Deseja usar seu celular? \n1)Sim \nNão")
if (usarcell == '1'){
    alert("Você vê a notícia que o comitê olímpico criou a equipe dos refugiados")
    alert("Mas mesmo assim, você não é bom o suficiente pra competir")
    alert("Então...")
    let treinocansado = prompt("Quer treinar novamente? \n1)Sim \n2)Não")
    if (treinocansado = '1'){
        alert("Você acabou de treinar, está esgotado")
        alert("Achou mesmo que ia conseguir 2 seções de treino seguidas?")
        alert("Vai dormir")
        alert("Você acaba dormindo") 
        atributos.energia += 70
    } else if (treinocansado = '2'){
        alert("Você decide dormir ao invéz de treinar")
        atributos.energia += 80
    }
}else if (usarcell == '2'){
        alert("Você nunca ficou sabendo da equipe de refugiados das olimpiadas")
        alert("E ficou sem rumo na vida")
        alert("Pense mais nas suas escolhas de vida da proxima vez")
        throw new Error()
        
    }
alert("CAPÍTULO III")
alert("Hora dos treinos mais intensos")
alert("Você decide comprar um energético")
let usarenergetico = prompt("Deseja tomar o energético? \n1)Sim \n2)Não")
energetico += 1
if (usarenergetico = '1'){
    energetico -=1
    alert("Você se sente mais pronto pro treino")
} else if (usarenergetico = '2'){
    alert("Você decide não tomar o energético")
}
alert("HORA DO TREINO")
function treinar() {
    while (true) {
        if (atributos.energia < 5) {
            alert("Você não tem energia suficiente para treinar.");
            return;
        }

        let treino = prompt("Qual ação deseja realizar? \n 1) Treinar Aceleração \n 2) Treinar Velocidade Máxima \n 3) Treinar Impulsão \n 4) Treinar Fôlego \n 5) Mostrar Status \n 6) Parar de Treinar");

        switch (treino) {
            case '1':
                atributos.aceleracao += 5;
                atributos.energia -= 5;
                alert("Você treinou Aceleração! \nAceleração: " + atributos.aceleracao + "\nEnergia restante: " + atributos.energia);
                break;
            case '2':
                atributos.velmax += 5;
                atributos.energia -= 5;
                alert("Você treinou Velocidade Máxima! \nVelocidade Máxima: " + atributos.velmax + "\nEnergia restante: " + atributos.energia);
                break;
            case '3':
                atributos.impusao += 5;
                atributos.energia -= 5;
                alert("Você treinou Impulsão! \nImpulsão: " + atributos.impusao + "\nEnergia restante: " + atributos.energia);
                break;
            case '4':
                atributos.folego += 5;
                atributos.energia -= 5;
                alert("Você treinou Fôlego! \nFôlego: " + atributos.folego + "\nEnergia restante: " + atributos.energia);
                break;
            case '5':
                alert("Status Atual: \nHP: " + atributos.hp + "\nAceleração: " + atributos.aceleracao + "\nVelocidade Máxima: " + atributos.velmax + "\nImpulsão: " + atributos.impusao + "\nFôlego: " + atributos.folego + "\nEnergia: " + atributos.energia);
                break;
            case '6':
                alert("Você decidiu parar de treinar.");
                return;
            default:
                alert("Opção inválida, tente novamente.");
                break;
        }
    }
}

treinar();