const dotsAi = require('.')

dotsAi.train()

const testCases =
[ [[1261, 9715], true],
  [[1738, 2995], false],
  [[8933, 2001], true]
]

const test = ([[x, y], should]) => ((is) =>
  (
    should === true &&
    is > 0.5
  ) ||
  (
    should === false &&
    is < 0.5
  )
)(dotsAi.net.activate([x / 10000, y / 10000]))

const res = testCases
  .filter((x) => !test(x))
  .map((x) => [test(x), ...x])

if (res.length > 0) {
  console.error('Failed on the following cases:')
  console.error(res)
  process.exit(1)
} else {
  console.log('Success!')
}

