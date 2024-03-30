
function transporMatriz(A) {
    function imprimirMatriz(matriz) {
        matriz.forEach(linha => console.log(linha.join(' ')));
    }

    console.log("Matriz original:");
    imprimirMatriz(A);

    const transposta = [];
    for (let coluna = 0; coluna < A[0].length; coluna++) {
        const novaLinha = [];
        for (let linha = 0; linha < A.length; linha++) {
            novaLinha.push(A[linha][coluna]);
        }
        transposta.push(novaLinha);
    }

    console.log("\nTransposta:");
    imprimirMatriz(transposta);
}


const matrizExemplo = [
    [1, 2],
    [3, 4],
    [5, 6]
];
transporMatriz(matrizExemplo);