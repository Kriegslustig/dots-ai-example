# Dots AI Example

This is a simple example app using AI to classifying dots on an X, Y axis.

## Running the example

```js
const dotsAi = require('.')

// Train
dotsAi.train()

// Test
// These features (X and Y) should return something well below 0.5
dotsAi.net.activate([0.01, 0.4])
// -> [ 0.06647038233857931 ]
```

