const marcas = ["BWM", "FERRARI", "HB20"];

marcas.push("FIAT");
for(let i = 0; i<marcas.length;i++){
    console.log(marcas[i] );
    console.log();
}

console.log("Remoção");

marcas.pop();
marcas.pop();


for(item of marcas){
    console.log("marca: " + item);
}

const alunos = ['Ana', 'Valeria'];

for(aluno of alunos){
    console.log("Aluno: " + aluno);
    
}




