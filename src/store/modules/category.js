import axios from "axios";
export default {
    namespaced: true,
    state: {
        kategori: [],
        kategoriHome:[]
    },
    getters: {
        getKategori: state => state.kategori,
        getKategoriHome: state => state.kategoriHome
    },
    actions: {
        async fetchKategori({ commit }) {
            try {
                const datakategori = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-categories")
                commit('SET_KATEGORI', datakategori.data.data.slice(0,20))
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
        async fetchKategoriHome({ commit }) {
            try {
                const datakategori = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-categories")
                commit('SET_KATEGORIHOME', datakategori.data.data.slice(0,15))
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
    },
    mutations: {
        SET_KATEGORI(state, kategori) {
            state.kategori = kategori
        },
        SET_KATEGORIHOME(state, kategori) {
            state.kategoriHome = kategori
        },
    }
}