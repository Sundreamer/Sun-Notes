<template>
    <div id="app">
        <toolbar></toolbar>
        <note-list></note-list>
        <router-view></router-view>
    </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import NoteList from './components/NoteList'
import { mapActions } from 'vuex'

export default {
    name: 'app',
    components: {
        Toolbar,
        NoteList,
    },
    methods: {
        ...mapActions([
            'initStore'     // 映射 this.initStore() 为 this.$store.dispatch('initStore')
        ]),
    },
    created () {
        this.initStore();
    },
}
</script>

<style>
html, #app {
    height: 100%;
    overflow: hidden;
}

body {
    position: relative;
    height: 100%;
    max-height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
}
</style>
