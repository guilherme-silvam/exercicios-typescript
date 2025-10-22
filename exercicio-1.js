/*
- Criar um enum em TypeScript.
- Definir valores fixos dentro do enum.
- Utilizar uma variável para armazenar um valor do enum.
- Exibir esse valor no console.
*/
var Status;
(function (Status) {
    Status["Ativo"] = "ATIVO";
    Status["Inativo"] = "INATIVO";
    Status["Pendente"] = "PENDENTE";
})(Status || (Status = {}));
var meuStatus = Status.Ativo;
console.log("Meu status é:", meuStatus);
