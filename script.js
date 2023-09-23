let matriz = [];

function generateInitialMatriz(matriz) {
	for (let i = 0; i < 9; i++) {
        let row = [];
		for (let j = 0; j < 9; j++) {
			row.push((j + i * 3 + Math.floor(i / 3)) % 9 + 1);
		}
		matriz.push(row);
	}
}

generateInitialMatriz(matriz);

console.table(matriz);
