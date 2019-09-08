# Official International Name days API library

## Name day API library for [api.abalin.net](https://api.abalin.net)

This library makes it easy to send requests towards [api.abalin.net](https://api.abalin.net) API.
API provides name days for various countries.

## Installation

```bash
npm install nameday-api
```

## List of supported countries

When using country codes in the library you can use either **country names** or **country codes**.

-   Country names
    -   United States
    -   Czech Republic
    -   Slovakia
    -   Poland
    -   France
    -   Hungary
    -   Croatia
    -   Sweden
    -   Austria
    -   Italy
    -   Germany
    -   Spain
-   Country codes
    -   us
    -   cz
    -   sk
    -   pl
    -   fr
    -   hu
    -   hr
    -   se
    -   at
    -   it
    -   de
    -   es

## Usage

##### Import

```javascript
const nameday = require("nameday-api").default;
// OR
import nameday from "nameday-api";
```

##### Request name days for today / tomorrow / yesterday

```javascript
nameday.today(); # {"day":27,"month":8,"name_us":"Caesar, Cesar ... "}
nameday.tomorrow(); # {"day":28,"month":8,"name_us":"Agustin, August, Augusta ... "}
nameday.yesterday(); # {"day":26,"month":8,"name_us":"Percival, Percy ... "}
```

##### Request name days for today / tomorrow / yesterday for specific country only

```javascript
nameday.today("sk"); # {"day":27,"month":8,"name_sk":"Silvia"}
nameday.today("Slovakia"); # {"day":27,"month":8,"name_sk":"Silvia"}

nameday.tomorrow("at"); # {"day":28,"month":8,"name_at":"Adelinde, Aline, Augustin"}
nameday.tomorrow("Austria"); # {"day":28,"month":8,"name_at":"Adelinde, Aline, Augustin"}

nameday.yesterday("de"); # {"day":26,"month":8,"name_de":"Margarita, Miriam, Patricia, Teresa"}
nameday.yesterday("Germany"); # {"day":26,"month":8,"name_de":"Margarita, Miriam, Patricia, Teresa"}
```

##### Request name days for specific date

> specificDay(day: number, month: number, countryCode?: string)

```javascript
nameday.specificDay(21, 10); # {"day":21,"month":10,"name_us":"Celina, Celine, Nobel" ... }
```

##### Request name days for specific date and for specific country only

simply add optional third string parameter `countryCode`, which must be one of the supported [country codes](https://api.abalin.net/documentation)

```javascript
nameday.specificDay(29, 3, "es"); # {"day":29,"month":3,"name_es":"Jonas, Segundo"}

nameday.specificDay(2, 12, "de"); # {"day":2,"month":12,"name_de":"Bibiana, Jan, Lucius"}

nameday.specificDay(22, 12, "pl"); # {"day":22,"month":1,"name_pl":"Anastazy, Dobromysł, Dorian, Marta, Wincenty"}

nameday.specificDay(2, 12, "hr"); # {"day":2,"month":2,"name_hr":"Marijan"}}
```

##### Request name day in country calendar

Will return all days in given calendar which contains the name.

> searchByName(name: string, countryCode: string)

Both parameters are required. Parameter `countryCode` must be one of the supported [country codes](https://api.abalin.net/documentation)

```javascript
nameday.searchByName("Jana", "cz") # {"calendar":"cz","results":[{"day":24,"month":5,"name":"Jana"},{"day":24,"month":6,"name":"Jan"} ... }}
```
