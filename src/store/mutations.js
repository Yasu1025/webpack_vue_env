import * as TYPE from './mutationTypes';

export const mutations = {
    [TYPE.SET_SAMPLE_TEXT](state, payload){
        state.mutateSampleMsg = payload
    }
}