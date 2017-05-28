import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

Vue.use(Vuex);

// 需要维护的状态
const state = {
    notes: [],
    activeNote: {},
    show: '',
};

// 导出 vuex
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});
