import axios from "axios";
export default {
  namespaced: true,
  state: {
    user_order: [],
  },
  getters: {
  },
  actions: {
    async fetch_userOrder({ commit }, data) {
        const token = localStorage.token;
        try {
            const response = await axios.get(
                "https://ecommerce.olipiskandar.com/api/v1/user/order/"+data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            commit("SET_USERORDER", response.data.data);
        } catch (error) {
            console.log(error);
            return error;
        }
    },
  },
  mutations: {
    SET_USERORDER(state, data) {
        state.user_order = data;
    },
  },
};
