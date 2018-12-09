<template>
    <ul>
        <li v-for="item in list" :key="item.id">
            <input type="checkbox" v-model="item.done">
            <span>{{item.text}}</span>
            <button @click="remove(item)">remove</button>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'todo-list',
    props: {
        list: Array,
    }
}
</script>

