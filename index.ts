import fetch from "node-fetch";

export type CountryCode =
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

const today = async (countryCode?: CountryCode) => {
	if (countryCode) {
		return fetch(
			`https://api.abalin.net/get/today?country=${countryCode}`
		).then(res => res.json().then(data => data.data));
	} else {
		return fetch("https://api.abalin.net/get/today").then(res =>
			res.json().then(data => data.data)
		);
	}
};

const tomorrow = (countryCode?: CountryCode) => {
	if (countryCode) {
		return fetch(
			`https://api.abalin.net/get/tomorrow?country=${countryCode}`
		).then(res => res.json().then(data => data.data));
	} else {
		return fetch("https://api.abalin.net/get/tomorrow").then(res =>
			res.json().then(data => data.data)
		);
	}
};

const yesterday = (countryCode?: CountryCode) => {
	if (countryCode) {
		return fetch(
			`https://api.abalin.net/get/yesterday?country=${countryCode}`
		).then(res => res.json().then(data => data.data));
	} else {
		return fetch("https://api.abalin.net/get/yesterday").then(res =>
			res.json().then(data => data.data)
		);
	}
};

const specificDay = (day: Day, month: Month, countryCode: CountryCode) => {
	if (countryCode) {
		return fetch(
			`https://api.abalin.net/get/namedays?day=${day}&month=${month}&country=${countryCode}`
		).then(res => res.json().then(data => data.data));
	} else {
		return fetch(
			`https://api.abalin.net/get/namedays?day=${day}&month=${month}`
		).then(res => res.json().then(data => data.data));
	}
};

const searchByName = (name: string, countryCode: CountryCode) => {
	return fetch(
		`https://api.abalin.net/get/getdate?name=${name}&calendar=${countryCode}`
	).then(res => res.json().then(data => data));
};

const nameday = { today, tomorrow, yesterday, specificDay, searchByName };

export default nameday;
