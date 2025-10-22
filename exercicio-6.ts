interface User {
  nome: string;
  idade: number;
  genero?: string;
}

function printUser({ nome, idade, genero = "masculino" }: User) {
  console.log("Nome:", nome);
  console.log("Idade:", idade);
  console.log("Gênero:", genero);
}

printUser({ nome: "Lucas", idade: 25, genero: "feminino" });
printUser({ nome: "João", idade: 30 }); // genero será "masculino" por padrão


        