// 生成 action 方法
function makeAction(type) {
    return ({ commit }, ...args) => commit(type, ...args);
}

// 默认的第一篇笔记
const initNote = {
    id: +new Date(),
    title: 'SunNotes',
    content: "### 前言\n> 这个项目虽然很简单，但是却也很适合刚刚开始接触使用 `Vue` 全家桶进行组件式开发的童鞋，特别是对理解 `Vuex` 的一些核心概念，例如单一状态树、单向数据流有很大的帮助，关于项目中使用到的 **Markdown** 编译器是我为了这个项目特意写的，写的很匆忙，所以可能会有些BUG，不支持 **Markdown** 的缩进语法，例如列表的嵌套，不过够用了。有兴趣的童鞋可以自己研究一下完善完善\n\n### 安装使用\n\n``` \n# 克隆项目代码\ngit clone git@github.com:Sundreamer/Sun-Notes.git\n\n# 进入到项目根目录\ncd sun-notes\n\n# 安装依赖包\nnpm install\n\n# serve with hot reload at localhost:8080\nnpm run dev\n```\n### 后续要添加的一些功能\n\n- 笔记的标签分类管理\n- Markdown的代码高亮\n- 使用 `Node + Express + MongoDB` 来编写服务端\n- 暂时还没想到...",
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
