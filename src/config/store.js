import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMenuVisible: true
        ,user: null
        ,personKey: null
    },
    mutations: {
        toggleMenu(state, isVisible) {
         
            if(isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }
        },
        setUser(state, user) {
            state.user = user
            
        }
        ,
        setPerson(state, personKey) {
            state.personKey = personKey
            
        }

    }
})