<template>
    <div>
        <input v-model="input">
        <button class="add" @click="add()">
            add 
        </button>
        <ul>
            <li v-for="item in list" :key="item.id">
                {{item.text}}
            </li>
        </ul>
        <button class="clear" @click="clear()">
            clear
        </button>
    </div>
</template>

<style scoped lang="stylus">
.add
    background-color black
    color white
    &:hover
        background-color #888
.clear
    background-color blue
    color white
    &:hover
        background-color #444
</style>


<script>
export default {
    name: 'page-todo',
    data() {
        return {
            list: [],
            input: '',
        }
    },
    methods: {
        add() {
            if (!this.input) return
            this.list.push({
                text: this.input,
                id: this.list.length + 1,
            })
            this.input = ''
        },
        clear() {
            this.list = []
            this.input = ""
        }
    },
}
</script>
