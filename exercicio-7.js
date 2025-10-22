/*
- Criar uma função genérica em TypeScript.
- Definir um tipo genérico `<T>` que permita trabalhar com diferentes tipos de dados.
- Iterar sobre os elementos de um array.
- Exibir os itens no console.
- Testar a função com arrays de números e strings.
*/
function makeArrays(item) {
    item.forEach(function (item) {
        console.log(item);
    });
}
var array1 = makeArrays([10, 20, 30]);
var array2 = makeArrays(["Guilherme", "Gabriel", "Ana"]);
