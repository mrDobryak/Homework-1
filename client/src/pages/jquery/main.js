import $ from 'jquery'

export default function() {
    
    console.clear()

    $(".numbers").find(".button").click(function() {
        var text = $(this).text();
        console.log(text)
    })
}
