import $ from 'jquery'
import html from './todo.html'

export default function() {
    $('#app').html(html)
    $('#add').click(function() {
        var text = $('#text').val()
        var button = $('<button>-</button>').click(function() {
            $(this).parent().remove()
        })
        var li = $('<li>'+text+'</li>').append(button)
        $('#list').append(li)
        $('#text').val('')
    })
    $('#clear').click(function() {
        $('#list').empty()
    })
}