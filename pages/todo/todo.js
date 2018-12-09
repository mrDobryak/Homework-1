import Vue from 'vue'
import Todo from './Todo.vue'

export default function() {
    new Vue({
        el: '#app',
        render: function(h) {
            return h(Todo)
        }
    })
//     $('#app').html(html)
//     $('#add').click(function() {
//         var text = $('#text').val()
//         var button = $('<button>-</button>').click(function() {
//             $(this).parent().remove()
//         })
//         var li = $('<li>'+text+'</li>').append(button)
//         $('#list').append(li)
//         $('#text').val('')
//     })
//     $('#clear').click(function() {
//         $('#list').empty()
//     })
}