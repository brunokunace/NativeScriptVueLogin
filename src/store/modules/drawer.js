const state = {
    menuVisibility: false
}

const mutations = {
    TOGGLE_DRAWER() {
        state.menuVisibility = !state.menuVisibility
    },
    CLOSE_DRAWER() {
        state.menuVisibility = false
    },
    OPEN_DRAWER() {
        state.menuVisibility = true
    }
}

const getters = {
    isVisible: state => state.menuVisibility
}

export default {
    getters,
    mutations,
    state
}