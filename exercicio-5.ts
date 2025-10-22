/*
- Criar uma interface para tipar objetos em TypeScript.
- Definir corretamente as propriedades e seus respectivos tipos.
- Criar um objeto baseado na interface.
- Exibir as informações no console.
*/

interface ICarro {
    marca: string;
    modelo: string;
    ano: number;
}   

const meuCarro: ICarro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};      

console.log(`Marca: ${meuCarro.marca}`);
console.log(`Modelo: ${meuCarro.modelo}`);
console.log(`Ano: ${meuCarro.ano}`);