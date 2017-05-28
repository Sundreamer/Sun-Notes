<template>
    <div id="notes-list">
        <div id="list-header">
            <h4 class="title">Notes | SunDreamer</h4>
            <div class="btn-group btn-group-justified" role="group">
                <!-- all -->
                <div class="btn-group" role="group">
                    <button class="btn btn-default"
                        @click="toggleShow('all')"
                        :class="{active: show === 'all'}">All Notes</button>
                </div>
                <!-- Favorites -->
                <div class="btn-group" role="group">
                    <button class="btn btn-default"
                        @click="toggleShow('favorite')"
                        :class="{active: show === 'favorite'}">Favorites</button>
                </div>
            </div>
        </div>
        <!-- 笔记列表 -->
        <div class="lists">
            <ul class="list-group">
                <li v-for="note in filterNotes"
                    title="查看笔记"
                    class="list-group-item"
                    :class="{active: activeNote === note}"
                    @click.self="changeNote(note)"
                >{{ note.title }}
                    <router-link to='/edit' tag="i" title="编辑" class="glyphicon glyphicon-pencil"></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'NoteList',
    computed: mapGetters([
        'show',
        'activeNote',
        'filterNotes',
    ]),
    methods: {
        ...mapActions([
            'toggleShow',
            'updateActiveNote',
        ]),
        changeNote (note) {
            this.$parent.$router.push('/');
            this.updateActiveNote(note);
        }
    },
}
</script>

<style scoped>
#notes-list {
    float: left;
    width: 300px;
    height: 100%;
    padding: 35px 25px 25px 25px;
    background-color: #f1f1f1;
}
.title {
    font-size: 20px;
    font-weight: normal;
    margin: 0;
    padding: 10px 0;
    text-align: center;
}
.lists {
    padding: 20px 0;
}
.btn:focus { outline: none; }
.list-group-item {
    position: relative;
    height: 40px;
    padding-right: 35px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
}
.list-group-item > i{
    display: none;
    position: absolute;
    top: 0; right: 0;
    width: 35px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    cursor: pointer;
}
.lists .active > i{ display: inline-block; }
</style>


