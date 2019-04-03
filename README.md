# SYNOPSIS

Generate Bitfinex Long/Short Ratios via Bitfinex's official API.

## USAGE

```sh
npm i -S joemccann/metric-long-short-ratios
```

In your Node app:

```js
const LSR = require('metric-long-short-ratio')
const lsr = new LSR()

;(async function () {
  const { err, data } = await lsr.ratio({asset: 'BTC'})
  if (err) return console.error(err)
  console.log(data)
})()
```

## API

```js
const lsr = new LSR()

const asset = 'BTC' || 'ETH' || 'LTC' || 'XRP'

lsr.ratio({ asset })

/*

  Returns an object with with the ratio data for the asset.

  {
    long: 26990.19218749,
    short: 20482.93119933,
    timestamp: 1554264060000,
    ratio: 1.3176918832970963,
    date: 'Tue Apr 02 2019 21:01:00 GMT-0700 (Pacific Daylight Time)' 
  }
*/
```

## AUTHORS

- [Joe McCann](https://twitter.com/joemccann)

## LICENSE

MIT
