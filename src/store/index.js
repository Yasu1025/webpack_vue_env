import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import { mutations } from './mutations';

Vue.use(Vuex);

const state = {
    isLoggedin: false,
    testMsg: 'I am from Vuex State!!!',
    mutateSampleMsg: ''
}

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})
