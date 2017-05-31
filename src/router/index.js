import Vue from 'vue'
import Router from 'vue-router'
// import Editor from '@/components/Editor'
// import Note from '@/components/Note'

const Editor = resolve => require(['@/components/Editor'], resolve);
const Note = resolve => require(['@/components/Note'], resolve);

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Note },
        { path: '/edit', component: Editor }
    ],
})
