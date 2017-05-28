<template>
    <div id="note-editor">
        <div class="form-group">
            <input type="text" name="title"
                class="title form-control"
                placeholder="请输入标题"
                @change="editNote(currentNote)"
                v-model="currentNote.title">
            <textarea
                v-model="currentNote.content" name="content"
                class="form-control" row="20" placeholder="请输入正文"
                @change="editNote(currentNote)"></textarea>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Editor',
    computed: mapState({
        currentNote: 'activeNote'
    }),
    methods: {
        ...mapActions([
            'editNote'
        ])
    },
}
</script>

<style scoped>
#note-editor {
    float: left;
    width: calc(100% - 380px);
    height: 100%;
    padding: 0 20px;
}
.form-group .title { margin: 20px 0; }
.form-group textarea {
    height: 400px;
}
</style>


