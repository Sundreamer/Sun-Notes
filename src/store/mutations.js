// 用于改变状态的 mutation
export default {
    // 初始化状态
    INIT_STORE (state, data) {
        state.notes = data.notes;
        state.activeNote = data.activeNote;
        state.show = data.show;
    },
    // 新增笔记
    NEW_NOTE (state) {
        var newNote = {
            id: +new Date(),
            title: '',
            content: '',
            favorite: false,
        };
        state.notes.push(newNote);
        state.activeNote = newNote;
    },
    // 修改笔记
    EDIT_NOTE (state, note) {
        state.activeNote = note;
    },
    // 删除笔记
    DEL_NOTE (state) {
        var index = state.notes.findIndex(note => note === state.activeNote);
        state.notes.splice(index, 1);
        state.activeNote = state.notes[0] || {};
    },
    // 切换笔记的收藏与取消收藏
    TOGGLE_FAVORITE (state) {
        state.activeNote.favorite = !state.activeNote.favorite;
    },
    // 切换显示数据列表的类型（全部 or 收藏）
    SET_SHOW (state, show) {
        // 切换列表展示的模式
        state.show = show;
        // 切换当前被激活的笔记
        if (show === 'favorite') {
            state.activeNote = state.notes.filter(note => note.favorite)[0] || {};
        } else {
            state.activeNote = state.notes[0] || {};
        }
    },
    // 设置当前激活的笔记
    SET_ACTIVE_NOTE (state, note) {
        state.activeNote = note;
    }
};
