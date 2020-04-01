import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // searchParameters: null,
        // tourID: null,
    },
    getters: {
        // SEARCH: state => {
        //     return state.searchParameters
        // },
        // TOUR_ID: state => {
        //     return state.tourID
        // }
    },
    mutations: {
        // SET_SEARCH: (state, payload) => {
        //     state.searchParameters = payload;
        // },
        // SET_TOUR_ID: (state, payload) => {
        //     state.tourID = payload;
        // }
    },
    actions: {
        // SAVE_SEARCH: (context, payload) => {
        //     context.commit('SET_SEARCH', payload);
        // },
        // SAVE_TOUR_ID: (context, payload) => {
        //     context.commit('SET_TOUR_ID', payload);
        // }
    },
});
