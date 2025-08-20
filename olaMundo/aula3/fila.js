// Gestão de Filas de Espera
// Imagine que você está desenvolvendo uma funcionalidade para gerenciar uma fila de
// espera de clientes em um atendimento.
// 1. Crie um código que faça o seguinte:
// 2. Crie um array chamado fila com os seguintes clientes: "Enzo", "Valentina" e “Lucas".
// 3. Use o método push para adicionar mais dois clientes ao final da fila: "Ana" e "Pedro".
// 4. Remova o primeiro cliente atendido da fila (dica: use o método pop).
// 5. Adicione outro cliente, “Mateus", ao final da fila.
// 6. Exiba no console:
// • A fila completa após todas as alterações e;
// • O nome do cliente que foi atendido e removido da fila.

const fila = ["Enzo", "Valentina", "Lucas"];

fila.push("Ana", "Pedro");

for (let i = 0; i < fila.length; i++) {
    console.log(fila[i]);
}


let removido = fila.shift();

fila.push("Mateus");

console.log("\n ATUALIZANDO FILA........\n");

for (let i = 0; i < fila.length; i++) {
    console.log(fila[i]);
}

console.log("O cliente atendido e removido da fila foi " + removido);


