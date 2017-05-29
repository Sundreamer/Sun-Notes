<template>
    <div id="toolbar">
        <i class="glyphicon logo"><img src="../assets/logo.png" width="30" height="30"></i>
        <i class="glyphicon glyphicon-plus" @click="newEditNote" title="新建笔记"></i>
        <i class="glyphicon glyphicon-star" @click="toggleFavorite" title="收藏笔记" :class="{starred: activeNote.favorite}"></i>
        <i class="glyphicon glyphicon-remove" @click="deleteNote" title="删除笔记"></i>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Toolbar',
    computed: mapGetters([
        'activeNote'
    ]),
    methods: {
        ...mapActions([
            'newNote',
            'toggleFavorite',
            'deleteNote'
        ]),
        newEditNote () {
            this.$parent.$router.push('/edit');
            this.newNote();
        }
    }
}
</script>

<style scoped>
#toolbar {
    float: left;
    width: 80px;
    height: 100%;
    padding: 35px 25px 25px 25px;
    color: #767676;
    background-color: #30414D;
}
#toolbar .starred { color: #F7AE4F; }
#toolbar i {
    font-size: 30px;
    margin-bottom: 35px;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.5s ease;
}
#toolbar i:hover { opacity: 1; }
</style>
