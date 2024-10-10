function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (saldoVitorias < 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    // Exibe a mensagem final
    console.log(`O Jogador tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

calcularRank (55,88);