// 获取 noteList，会根据 state.show 的状态过滤数据
export const filterNotes = (state) => {
    if (state.show === 'all') {
        return state.notes || {};
    } else if (state.show === 'favorite') {
        return state.notes.filter(note => note.favorite) || {};
    }
};

// 获取列表展示状态
export const show = (state) => {
    return state.show;
};

// 获取当前激活的 note
export const activeNote = (state) => {
    return state.activeNote;
}
