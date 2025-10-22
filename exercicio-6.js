function printUser(_a) {
    var nome = _a.nome, idade = _a.idade, _b = _a.genero, genero = _b === void 0 ? "masculino" : _b;
    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("Gênero:", genero);
}
printUser({ nome: "Lucas", idade: 25, genero: "feminino" });
printUser({ nome: "João", idade: 30 }); // genero será "masculino" por padrão
