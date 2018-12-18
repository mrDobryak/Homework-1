<template>
    <div>
        <input v-model="input">
        <button @click="add()">
            add 
        </button>
        <ul>
            <li v-for="item in list" :key="item.id">
                {{item.text}}
            </li>
        </ul>
        <button @click="clear()">
            clear
        </button>
    </div>
</template>

<script>
export default {
    name: 'todo',
    data: function() {
        return {
            list: [],
            input: '',
        }
    },
    methods: {
        add: function() {
            this.list.push({
                text: this.input,
                id: this.list.length + 1,
            })
            this.input = ''
        },
        clear: function() {
            this.list = []
        }
    },
}
</script>
