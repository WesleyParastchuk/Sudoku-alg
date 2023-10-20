const length = 9;

class Celula {
	_value = 0;
	_type = "number";
	constructor(value = 0) {
		this._type;
		this._value = value;
	}

	get value() {
		return this._value;
	}

	set value(newValue) {
		if (this._type === "number") this._value = newValue;
		else {
			if (typeof this._value == "number") {
				this._value = Array(9).fill(false);
			}
			this._value[newValue] =! this._value[newValue];
		}
	}

	switchType(type = this._type) {
		this._type = type == "note" ? "number" : "note";
	}

	get type() {
		return this._type;
	}
}

function createEmptyRow(length = 9) {
	return Array(length)
		.fill()
		.map(() => new Celula());
}

function createEmptyMatrix(rows = 9, cols = 9) {
	return Array(rows)
		.fill()
		.map(() => createEmptyRow(cols));
}

function arrOneToX(length = 9) {
	return Array.from({ length: length }, (_, i) => i + 1);
}

function randomOnetoX(length = 9) {
	return arrOneToX(length).sort(() => Math.random() - 0.5);
}

function setDiagonal(matrix, size) {
	for (let i = 0; i < size; i++) {
		const numberPool = randomOnetoX();
		for (let j = 0; j < size; j++) {
			for (let k = 0; k < size; k++) {
				matrix[j + i * size][k + i * size].value =
					numberPool[k + j * size];
			}
		}
	}
	return matrix;
}

function randomMatrix(length = 9) {
	const blockSize = Math.sqrt(length);
	const resultMatrix = setDiagonal(createEmptyMatrix(), blockSize);
	return resultMatrix;
}

let matrix = randomMatrix(length);

for (let i of matrix) {
	let text = "";
	for (let j of i) {
		text += " " + j.value;
	}
	console.log(text);
}
