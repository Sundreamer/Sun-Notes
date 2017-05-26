import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex);

// 需要维护的状态
const state = {
    notes: [],
    activeNote: {},
    show: '',
};

// 用于改变状态的 mutation
const mutations = {
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
        for (var i = state.notes.length; i >= 0; i--) {
            if (state.notes[i].id === note.id) {
                state.notes[i] = note;
                break;
            }
        }
    },
    // 删除笔记
    DEL_NOTE (state) {
        state.notes.$remove(state.activeNote);
        state.activeNote = state.notes[0] || {};
    },
    // 切换笔记的收藏与取消收藏
    TOGGLE_FAVORITE (state) {
        state.activeNote.favorite = !state.activeNote.favorite;
    },
    // 切换显示数据列表的类型（全部 or 收藏）
    SET_SHOW (state, show) {
        state.show = show;
        // 切换数据展示，主要是切换当前被激活的笔记
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

export default new Vuex.Store({
    state,
    mutations,
});
