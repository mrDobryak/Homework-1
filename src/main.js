import Vue from 'vue'
import Todo from './pages/Todo.vue'

new Vue({
    el: '#app',
    render: function(h) {
        return h(Todo)
    }
})