
let nome = prompt("Qual é o seu nome?");
let rendaMensal = validarNumero("Informe sua renda mensal:");

let qtdDespesas = Number(prompt("Quantas despesas deseja informar (limite de 1 a 5)?"));


if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

function validarNumero(mensagem) {
    let valor = prompt(mensagem);
    while (isNaN(valor) || valor === "" || valor === null) {
        valor = prompt("Valor inválido! Por favor, digite um número válido:");
    }
    return Number(valor);
}


let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let valorDespesa = validarNumero(`Digite o valor da despesa ${i} de ${qtdDespesas}:`);
    totalDespesas += valorDespesa;
}


let sobra = rendaMensal - totalDespesas;
let statusMensagem = "";

if (totalDespesas > rendaMensal) {
    statusMensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {

    let margemSeguranca = rendaMensal * 0.3;

    if (sobra >= margemSeguranca) {
        statusMensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        statusMensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}

let resultadoFinal = `
--- RELATÓRIO DE ORÇAMENTO ---
Usuário: ${nome}
Renda: R$ ${rendaMensal.toFixed(2)}
Total de Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
-------------------------------
Status: ${statusMensagem}
`;

alert(resultadoFinal);
console.log(resultadoFinal);