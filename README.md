# Official International Name days API library

## Name day API library for [api.abalin.net](https://api.abalin.net)

This library makes it easy to send requests towards [api.abalin.net](https://api.abalin.net) API.
API provides name days for various countries.

## Installation

```bash
npm install nameday-api
// OR
yarn add nameday-api
```

## List of supported countries

When using country codes in the library you can use **country codes**.

- Country codes
  - bg
  - lt
  - ee
  - lv
  - gr
  - ru
  - at
  - dk
  - fr
  - it
  - sk
  - cz
  - es
  - hr
  - pl
  - us
  - de
  - fi
  - hu
  - se

## Usage

##### Import

```javascript
const nameday = require("nameday-api");
// OR
import nameday from "nameday-api";
```

##### Request name days for today / tomorrow / yesterday

```javascript
nameday.today();
nameday.tomorrow();
nameday.yesterday();
```

##### Request name days for today / tomorrow / yesterday for specific country only

```javascript
nameday.today("sk");
nameday.tomorrow("at");
nameday.yesterday("de");
```

##### Request name days for specific date and for specific country

```javascript
nameday.specificDay(29, 3, "es");
nameday.specificDay(2, 12, "de");
nameday.specificDay(22, 12, "pl");
nameday.specificDay(2, 12, "hr");
```

##### Request name day in country calendar

```javascript
nameday.searchByName("Jana", "cz");
```
