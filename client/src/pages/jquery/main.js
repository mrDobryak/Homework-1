import $ from 'jquery'

export default function() {
    
    console.clear()
    var value = 0
    var result = 0
    var didgit = ""
    function updateDisplay() {
        console.log(value, result)
        if(value) {
            $(".display").text(value); 
        } else {
            $(".display").text(result);
        }
    }

    $(".numbers .button").click(function() {
        var text = $(this).text();
        var number = Number(text)
        if(value === 0) {
            value = number
        } else {
            value = String(value) + String(number) 
        }
        value = Number(value)
        updateDisplay()
    })
    $(".didgits .button").click(function() {
        console.log(didgit)
        if(didgit === "+") {
            result = result + value 
        } else if(didgit === "-") {
            result = result - value
        } else if(didgit === "*") {
            result = result * value
        } else if(didgit === "/") {
            result = result / value
        } else {
            result = value
        }
        didgit = $(this).text()
        value = 0
        updateDisplay()
    })
    $(".display").click(function() {
        value = 0
        didgit = ""
        result = 0
        updateDisplay()
    })
    updateDisplay()
}
