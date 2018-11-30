import $ from 'jquery'
import moment from 'moment'

export default function() {
    
    console.clear()

    $("#button").click(function() {
        var date = moment().format("DD.MM.YY HH:mm:ss")
        $(".text").text(date)
    })
}
