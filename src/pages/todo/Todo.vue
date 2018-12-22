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
    name: 'page-todo',
    data() {
        return {
            list: [],
            input: '',
        }
    },
    created() {
        this.addDefaultTask()
        for (var i=0; i < this.list.length; i++ ){
            console.log(this.list[i].text)
        }
    },
    methods: {
        addDefaultTask() {
            
            this.list.push({
                text: 'Default task',
                id: 0,
            })
            
            this.list.push({
                text: 'Not Default task',
                id: 1,
            })
            
            this.list.push({
                text: 'Not not Default task',
                id: 2,
            })
            this.list.push({
                text: 'Not12313 not Default task',
                id: 3,
            })
            
        },
        add() {
            this.list.push({
                text: this.input,
                id: this.list.length + 1,
            })
            this.input = ''
        },
        clear() {
            this.list = []
        }
    },
}
</script>
