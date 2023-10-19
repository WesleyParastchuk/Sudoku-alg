function createEmptyRow(length = 9) {
	return Array(length).fill(0);
}

function createEmptyMatrix(rows = 9, cols = 9) {
	return Array(rows)
		.fill()
		.map(() => createEmptyRow(cols));
}

function arrOneToNine() {
	return Array.from({ length: 9 }, (_, i) => i + 1);
}

function randomMatrix() {
	const resultMatriz = createEmptyMatrix();
	for (let i = 0; i < 3; i++) {
		let numberPool = arrOneToNine().sort(() => Math.random() - 0.5);
		for (let j = 0; j < 3; j++) {
			for (let k = 0; k < 3; k++) {
				resultMatriz[j + i * 3][k + i * 3] = numberPool[k + j * 3];
			}
		}
	}
	return resultMatriz;
}

let matrix = randomMatrix();

console.table(matrix);
