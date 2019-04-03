const test = require('tape')
const LSR = require('.')
const lsr = new LSR()

test('sanity', t => {
  t.ok(true)
  t.end()
})

test('Long Short Ratio - BTC', async t => {
  const { err, data } = await lsr.ratio({ asset: 'BTC' })
  if (err) {
    console.error(err)
    return t.end()
  }
  console.log(data)
  t.ok(data)
  t.end()
})

test('Long Short Ratio - ETH', async t => {
  const { err, data } = await lsr.ratio({ asset: 'ETH' })
  if (err) {
    console.error(err)
    return t.end()
  }
  console.log(data)
  t.ok(data)
  t.end()
})

test('Long Short Ratio - LTC', async t => {
  const { err, data } = await lsr.ratio({ asset: 'LTC' })
  if (err) {
    console.error(err)
    return t.end()
  }
  console.log(data)
  t.ok(data)
  t.end()
})

test('Long Short Ratio - XRP', async t => {
  const { err, data } = await lsr.ratio({ asset: 'XRP' })
  if (err) {
    console.error(err)
    return t.end()
  }
  console.log(data)
  t.ok(data)
  t.end()
})
