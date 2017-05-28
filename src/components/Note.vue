<template>
    <div id="note">
        <div class="content">
            <h3>{{ activeNote.title }}</h3>
            <div>{{ activeNote.content }}</div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Note',
    computed: mapState(['activeNote']),
    methods: {
        mdToHtml (content) {
            // 替换所有 # 符号为 h系列标签
            var result = content.replace(/((#{1,6})\s+([^#\+\-\s]*)){1}/g, function (match, k1, k2, k3) {
                var len = 'h' + k2.length;
                return '<' + len + '>' + k3 + '</' + len + '>';
            });
            // 替换所有 + 或 - 为 li 标签
            result = result.replace(/(([\+|\-])\s+([^#\+\-\s]*)){1}/g, function (match, k1, k2, k3) {
                return '<li>' + k3 + '</li>';
            });
            // 将替换后的 li 标签用 ul 标签包裹起来
            result = result.replace(/(<li>(.+)<\/li>)/, function (match, k1, k2) {
                return '<ul>' + k1 + '</ul>';
            });
            return result;
        }
    }
}
</script>

<style scoped>
#note {
    float: left;
    width: calc(100% - 380px);
    height: 100%;
    padding: 0 20px;
    overflow: auto;
}
.content > div{
    height: 800px;
}
</style>

