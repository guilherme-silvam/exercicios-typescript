/*
- Criar um enum em TypeScript.
- Definir valores fixos dentro do enum.
- Utilizar uma variável para armazenar um valor do enum.
- Exibir esse valor no console.
*/

enum Status {
    Ativo = "ATIVO",
    Inativo = "INATIVO",
    Pendente = "PENDENTE"
}

let meuStatus: Status = Status.Ativo;
console.log("Meu status é:", meuStatus);