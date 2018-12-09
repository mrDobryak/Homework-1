import $ from 'jquery'
import html from './todo.html'

export default function() {
    $('#app').html(html)
    $('#add').click(function() {
        var text = $('#text').val()
        $('#list').append('<li>'+text+'</li>')
        $('#text').val('')
    })
    $('#clear').click(function() {
        $('#list').empty()
    })
}