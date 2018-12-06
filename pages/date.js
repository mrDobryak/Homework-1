import moment from 'moment'
import $ from 'jquery'
import 'moment/locale/az'

moment.locale("az")

function update() {
    var date = moment().format("Do MMMM YYYY HH:mm:ss")
    $("#app").html(date)
}
    
export default function() {
    setInterval(update, 1000)
}