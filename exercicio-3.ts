/*
- Criar um `type` que represente os produtos retornados pela API FakeStore.
- Definir todas as propriedades necessárias, incluindo o objeto interno `rating`.
- Implementar uma função assíncrona para buscar os dados da API.
- Tipar o retorno da função como `Promise<Produto[]>`.
- Exibir no console o título e o preço de cada produto.
- Tratar erros em caso de falha na requisição.
*/
type Rating = {
    rate: number;
    count: number;
};

type Produto = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
};

async function fetchProdutos(): Promise<Produto[]> {
    try {
        const response = await fetch('https://fakestoreapi.com/products');      
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        const produtos: Produto[] = await response.json();
        return produtos;
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        return [];
    }
}

fetchProdutos().then(produtos => {
    produtos.forEach(produto => {
        console.log(`Título: ${produto.title}, Preço: $${produto.price}`);
    });
});
