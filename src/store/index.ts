import {createStore} from 'vuex'

export default createStore({
    state: {
        firstVal: 0,
        secondVal: 0,
        sum: 0
    },
    mutations: {
        setFirstVal(state, data) {
            state.firstVal = data
        },
        setSecondVal(state, data) {state.secondVal = data},
        setSum(state) {state.sum = state.firstVal + state.secondVal}
    },
    getters: {
        firstVal(state) { return state.firstVal},
        secondVal(state) { return state.secondVal},
        sum(state) { return state.sum}
    },
    actions: {},
    modules: {}
})
