// 生成 action 方法
function makeAction(type) {
    return ({ commit }, ...args) => commit(type, ...args);
}

// 默认的第一篇笔记
const initNote = {
    id: +new Date(),
    title: '我的笔记',
    content: '我的第一篇笔记',
    favorite: false,
};

// 从 localStorage 中读取保存的笔记数据
function getNotes() {
    var noteStore = window.localStorage.getItem('noteStore');
    noteStore = noteStore ? JSON.parse(noteStore) : {};
    if (!noteStore.show) {
        noteStore.show = 'all';
        noteStore.notes = [initNote];
        noteStore.activeNote = initNote;
    } else {
        noteStore.activeNote = noteStore.notes.find(function (val) {
            return val.id === noteStore.activeNote.id;
        });
    }
    return noteStore;
}

// 初始化状态
export const initStore = ({ commit }) => {
    commit('INIT_STORE', getNotes());
};
// 更新当前的 activeNote 对象
export const updateActiveNote = makeAction('SET_ACTIVE_NOTE');

// 添加一个 note 对象
export const newNote = makeAction('NEW_NOTE');

// 删除一个 note 对象
export const deleteNote = makeAction('DEL_NOTE');

// 切换 Note 的收藏状态
export const toggleFavorite = makeAction('TOGGLE_FAVORITE');

// 修改一个 Note 对象
export const editNote = makeAction('EDIT_NOTE');

// 更新列表展示模式
export const toggleShow = makeAction('SET_SHOW');
