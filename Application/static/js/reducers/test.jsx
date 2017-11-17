const test = (state = {test: 0}, action) => {
    switch (action.type) {
        case 'TEST':
            return {
                test: this.state.test + 1,
            }
        default:
        return state
    }
}

export default test