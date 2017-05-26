// 生成 action 方法
function makeAction(type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args);
}

// 初始化第一篇笔记
const initNote = {
    id: +new Date(),
    title: '我的笔记',
    content: '我的第一篇笔记',
    favorite: false,
};

// 模拟初始化数据
const initData = {
    show: 'all',
    notes: [initNote],
    activeNote: initNote,
};

// 初始化状态
export const initStore = ({ dispatch }) => {
    dispatch('INIT_STORE', initData);
};
// 更新当前的 activeNote 对象
export const updateActiveNote = makeAction('SET_ACTIVE_NOTE');

// 添加一个 note 对象
export const newNote = makeAction('NEW_NOTE');

// 删除一个 note 对象
export const deleteNote = makeAction('DELETE_NOTE');

// 切换 Note 的收藏状态
export const toggleFavorite = makeAction('TOGGLE_FAVORITE');

// 修改一个 Note 对象
export const editNote = makeAction('EDIT_NOTE');

// 更新列表展示模式
export const updateShow = makeAction('SET_SHOW_ALL');
