console.log('\x1Bc');
// npm start

var moment = require("moment")

var fmt = "DD.MM.YYYY HH:mm:ss"
var date = moment()

date.add(3, "month").endOf("month")

console.log(date.format(fmt))
