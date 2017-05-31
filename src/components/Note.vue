<template>
    <div id="note">
        <div class="content">
            <h3>{{ activeNote.title }}</h3>
            <div v-html="content" class="markdown"></div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import markDown from '../../static/markdown.js'

export default {
    name: 'Note',
    computed: {
        ...mapState(['activeNote']),
        content () {
            return markDown(this.activeNote.content);
        },
    },
}
</script>

<style>
#note {
    float: left;
    width: calc(100% - 380px);
    height: 100%;
    padding: 0 20px;
    overflow: auto;
}
.content > h3 {
    margin: 0;
    padding: 20px 0;
    border-bottom: 1px solid #e0e0e0;
}
/* markdown 转换后的标签样式 */
.markdown a { text-decoration: none; }
.markdown img { margin: 10px 0; }
.markdown li { margin: 10px 0; }
.markdown p {
    line-height: 1.5em;
    margin: 10px 0;
}
.markdown pre {
    padding: 15px 20px;
    font-family: 'Consolas';
    font-size: 14px;
    color: #fff;
    background: #23241F;
}
.markdown blockquote {
    margin: 10px 0;
    padding: 10px 20px;
    font-size: 14px;
    border-left: 8px solid #d6dbdd;
    background: #F2F4F6;
}
.markdown code {
    padding: 3px 5px;
    font-family: 'Consolas';
    font-size: 14px;
    color: #D3514E;
    background: #F9F2F4;
}
</style>

