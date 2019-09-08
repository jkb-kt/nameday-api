import fetch from "node-fetch";

export type Country =
	| "us"
	| "cz"
	| "sk"
	| "pl"
	| "fr"
	| "hu"
	| "hr"
	| "se"
	| "at"
	| "it"
	| "de"
	| "es";

export type Day =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25
	| 26
	| 27
	| 28
	| 29
	| 30
	| 31;

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const today = async (country?: Country) => {
	if (country) {
		return fetch(
			`https://api.abalin.net/get/today?country=${country}`
		).then(res => res.json().then(data => data.data));
	} else {
		return fetch("https://api.abalin.net/get/today").then(res =>
			res.json().then(data => data.data)
		);
	}
};

const tomorrow = (country?: Country) => {
	if (country) {
		return fetch(
			`https://api.abalin.net/get/tomorrow?country=${country}`
		).then(res => res.json().then(data => data.data));
	} else {
		return fetch("https://api.abalin.net/get/tomorrow").then(res =>
			res.json().then(data => data.data)
		);
	}
};

const yesterday = (country?: Country) => {
	if (country) {
		return fetch(
			`https://api.abalin.net/get/yesterday?country=${country}`
		).then(res => res.json().then(data => data.data));
	} else {
		return fetch("https://api.abalin.net/get/yesterday").then(res =>
			res.json().then(data => data.data)
		);
	}
};

const specificDay = (day: Day, month: Month, country: Country) => {
	if (country) {
		return fetch(
			`https://api.abalin.net/get/namedays?day=${day}&month=${month}&country=${country}`
		).then(res => res.json().then(data => data.data));
	} else {
		return fetch(
			`https://api.abalin.net/get/namedays?day=${day}&month=${month}`
		).then(res => res.json().then(data => data.data));
	}
};

const searchDayByName = (name: string, country: Country) => {
	return fetch(
		`https://api.abalin.net/get/getdate?name=${name}&calendar=${country}`
	).then(res => res.json().then(data => data));
};

const nameday = { today, tomorrow, yesterday, specificDay, searchDayByName };

module.exports = nameday;
