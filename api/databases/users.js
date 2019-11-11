const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true)
const debug = require("debug")("tb-api:dev")

module.exports = () =>
{
	mongoose.connect('mongodb://localhost', { useNewUrlParser: true })
	.then(() => debug('Connected'))
	.catch(err => debug('Could not connect...'))
}