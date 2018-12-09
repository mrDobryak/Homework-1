<template>
    <div>
        <input v-model="text" @keydown.enter="add()">
        <button @click="add()">Add</button>
        <div>
            <h4>Not done</h4>
            <todo-list :list="listNotDone" />
        </div>
        <div>
            <h4>Done</h4>
            <todo-list :list="listDone" />
        </div>
        <button @click="removeAll()">remove all</button>
    </div>
</template>

<script>
import TodoList from './List.vue'

export default {
    name: 'Todo',
    components: {
        TodoList: TodoList,
    },
    data: function() {
        return {
            text: '',
            list: [],
            id: 0,
        }
    },
    computed: {
        listDone: function() {
            return this.list.filter(function(i) {
                return i.done
            })
        },
        listNotDone: function() {
            return this.list.filter(function(i) {
                return !i.done
            })
        }
    },
    methods: {
        add: function() {
            this.list.push({
                text: this.text,
                id: this.id,
                done: false,
            })
            this.text = ""
            this.id++
        },
        remove: function(item){
            this.list = this.list.filter(function(i) {
                return i.id !== item.id
            })
        },
        removeAll: function() {
            this.list = []
        }
    }
}
</script>
