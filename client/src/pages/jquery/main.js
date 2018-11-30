import $ from 'jquery'

export default function() {
    
    console.clear()

    $(".numbers").click(function() {
        var html = $('.button').text();
        console.log(html)
    })
}
