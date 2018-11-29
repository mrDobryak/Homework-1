var b = $("#action-button")
var c = $(".counter")
var counter = 0

function counterIncrement(a) {
    if(a !== "first"){
        counter += 1
    } 
    $(".counter").addClass("dobryak" + counter).removeClass("dobryak" + (counter-1))
    c.text("counter is " + counter)
}

b.click(counterIncrement)

counterIncrement("first")

