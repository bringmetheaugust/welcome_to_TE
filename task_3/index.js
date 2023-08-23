/**
 * @description имитация fetch. возвращает количество шариков
 * @param {Number} id ID шарика по цвету
 * @returns {Number} количество шариков
 */
async function fetchBallonAmount(id) {
	const RANDOM_TIMEOUT = Math.ceil(Math.random() * 10000) // 1-9 секунд
	const RANDOM_AMOUNT = Math.ceil(Math.random() * id) // случайное число

	return new Promise(resolve => setTimeout(() => resolve(RANDOM_AMOUNT), RANDOM_TIMEOUT))
}

// данные о шариках
const BALLONS = {
	red: {
		id: 202,
		isPublic: true,
	},
	blue: {
		id: 356,
		isPublic: false,
	},
	yellow: {
		id: 451,
		isPublic: false,
	},
	black: {
		id: 35,
		isPublic: true,
	},
	green: {
		id: 191,
		isPublic: true,
	},
	white: {
		id: 911,
		isPublic: true,
	},
}

// Ваш код здесь
