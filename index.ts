import fetch from "isomorphic-fetch";

export type CountryCode =
  | "bg"
  | "lt"
  | "ee"
  | "lv"
  | "gr"
  | "ru"
  | "at"
  | "dk"
  | "fr"
  | "it"
  | "sk"
  | "cz"
  | "es"
  | "hr"
  | "pl"
  | "us"
  | "de"
  | "fi"
  | "hu"
  | "se";

export type TimeZone =
  | "America/Denver"
  | "America/Costa_Rica"
  | "America/Los_Angeles"
  | "America/St_Vincent"
  | "America/Toronto"
  | "Europe/Amsterdam"
  | "Europe/Monaco"
  | "Europe/Prague"
  | "Europe/Isle_of_Man"
  | "Africa/Cairo"
  | "Africa/Johannesburg"
  | "Africa/Nairobi"
  | "Asia/Yakutsk"
  | "Asia/Hong_Kong"
  | "Asia/Taipei"
  | "Pacific/Midway"
  | "Pacific/Honolulu"
  | "Etc/GMT-6"
  | "US/Samoa"
  | "Zulu"
  | "US/Hawaii"
  | "Israel"
  | "Etc/GMT-2";

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

export interface Response {
  dates: { day: Day; month: Month };
  namedays: {
    bg?: string;
    lt?: string;
    ee?: string;
    lv?: string;
    gr?: string;
    ru?: string;
    at?: string;
    dk?: string;
    fr?: string;
    it?: string;
    sk?: string;
    cz?: string;
    es?: string;
    hr?: string;
    pl?: string;
    us?: string;
    de?: string;
    fi?: string;
    hu?: string;
    se?: string;
  };
}

export interface ResponseSpecific {
  "country name": string;
  "country code": CountryCode;
  results: { day: Day; month: Month; name: string }[];
}

const today = async (countryCode?: CountryCode, timeZone?: TimeZone): Promise<Response> => {
  if (countryCode && timeZone) {
    return fetch(`https://api.abalin.net/today?timezone=${timeZone}&country=${countryCode}`, {
      cache: "no-store",
    }).then((res) => res.json().then((data) => data.data));
  } else if (countryCode) {
    return fetch(`https://api.abalin.net/today?country=${countryCode}`, {
      cache: "no-store",
    }).then((res) => res.json().then((data) => data.data));
  } else if (timeZone) {
    return fetch(`https://api.abalin.net/today?timezone=${timeZone}`, {
      cache: "no-store",
    }).then((res) => res.json().then((data) => data.data));
  } else {
    return fetch("https://api.abalin.net/today", {
      cache: "no-store",
    }).then((res) => res.json().then((data) => data.data));
  }
};

const tomorrow = (countryCode?: CountryCode, timeZone?: TimeZone): Promise<Response> => {
  if (countryCode && timeZone) {
    return fetch(`https://api.abalin.net/tomorrow?timezone=${timeZone}&country=${countryCode}`, {
      cache: "no-store",
    }).then((res) => res.json().then((data) => data.data));
  } else if (countryCode) {
    return fetch(`https://api.abalin.net/tomorrow?country=${countryCode}`, {
      cache: "no-store",
    }).then((res) => res.json().then((data) => data.data));
  } else if (timeZone) {
    return fetch(`https://api.abalin.net/tomorrow?timezone=${timeZone}`, {
      cache: "no-store",
    }).then((res) => res.json().then((data) => data.data));
  } else {
    return fetch("https://api.abalin.net/tomorrow", {
      cache: "no-store",
    }).then((res) => res.json().then((data) => data.data));
  }
};

const yesterday = (countryCode?: CountryCode, timeZone?: TimeZone): Promise<Response> => {
  if (countryCode && timeZone) {
    return fetch(`https://api.abalin.net/yesterday?timezone=${timeZone}&country=${countryCode}`, {
      cache: "no-store",
    }).then((res) => res.json().then((data) => data.data));
  } else if (countryCode) {
    return fetch(`https://api.abalin.net/yesterday?country=${countryCode}`, {
      cache: "no-store",
    }).then((res) => res.json().then((data) => data.data));
  } else if (timeZone) {
    return fetch(`https://api.abalin.net/yesterday?timezone=${timeZone}`, {
      cache: "no-store",
    }).then((res) => res.json().then((data) => data.data));
  } else {
    return fetch("https://api.abalin.net/yesterday", {
      cache: "no-store",
    }).then((res) => res.json().then((data) => data.data));
  }
};

const specificDay = (day: Day, month: Month, countryCode: CountryCode): Promise<Response> => {
  if (countryCode) {
    return fetch(
      `https://api.abalin.net/namedays?day=${day}&month=${month}&country=${countryCode}`,
      { cache: "no-store" }
    ).then((res) => res.json().then((data) => data.data));
  } else {
    return fetch(`https://api.abalin.net/namedays?day=${day}&month=${month}`, {
      cache: "no-store",
    }).then((res) => res.json().then((data) => data.data));
  }
};

const searchByName = (name: string, countryCode: CountryCode): Promise<ResponseSpecific> => {
  return fetch(`https://api.abalin.net/getdate?name=${name}&country=${countryCode}`, {
    cache: "no-store",
  }).then((res) => res.json().then((data) => data));
};

const nameday = { today, tomorrow, yesterday, specificDay, searchByName };

module.exports = nameday;
