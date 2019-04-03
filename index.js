//
// The following class fetches data directly from the Bitfinex official
// API. No API key is necessary as the data is public.
//
const fetch = require('node-fetch')

class BitfinexLongShortRatio {
  constructor () {
    this.BASE_URL = `https://api.bitfinex.com/v2/stats1/pos.size:1m:`

    this.REQUEST_OPTIONS = {
      'headers': {
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.9'
      },
      'method': 'GET'
    }
  }

  async responseHandler (response) {
    if (!response.ok) return { err: response.statusText }
    const data = await response.json()
    return { data }
  }

  _normalize (args) {
    const {
      asset,
      direction
    } = args
    return `t${asset.toUpperCase()}USD:${direction}/last`
  }

  async ratio (args) {
    const {
      asset
    } = args

    const data = {
      long: null,
      short: null
    }

    // Get Long value
    {
      const direction = 'long'
      const URL = this.BASE_URL + this._normalize({ asset, direction })
      const response = await fetch(URL, this.REQUEST_OPTIONS)
      const { err, data: long } = await this.responseHandler(response)
      if (err) return { err }
      data.timestamp = long[0]
      data.long = long[1]
    }

    // Get Short value
    {
      const direction = 'short'
      const URL = this.BASE_URL + this._normalize({ asset, direction })
      const response = await fetch(URL, this.REQUEST_OPTIONS)
      const { err, data: short } = await this.responseHandler(response)
      if (err) return { err }
      data.timestamp = short[0]
      data.short = short[1]
    }

    data.ratio = data.long / data.short

    data.date = Date(data.timestamp)

    return { data }
  }
}

module.exports = BitfinexLongShortRatio
