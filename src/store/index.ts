import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {    // data
    recordList: [] as RecordItem[]
  },
  mutations: { // methods
    fetchRecord(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.time = new Date();
      state.recordList?.push(record2);
      store.commit('saveRecord');
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList',
        JSON.stringify(state.recordList));
    },
  }
});

export default store;
