import * as TYPE from './mutationTypes'


export const setSample = ({ commit }, payload) => {
    commit(TYPE.SET_SAMPLE_TEXT, payload);
}