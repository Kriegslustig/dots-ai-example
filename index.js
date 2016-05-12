const data = require('./data.json')

const synaptic = require('synaptic')
const Trainer = synaptic.Trainer
const Architect = synaptic.Architect

const net = new Architect.Perceptron(2, 3, 1)
const trainer = new Trainer(net)

exports.train = () => trainer.train(
  data.map((d) => ({
    input: [d[0][0] / 10000, d[0][1] / 10000],
    output: [d[1] ? 1 : 0]
  }))
)
exports.net = net

