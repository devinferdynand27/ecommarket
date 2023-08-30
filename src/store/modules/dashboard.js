import axios from "axios";
export default {
  namespaced: true,
  state: {
    dashboard: [],
  },
  getters: {
    getDashboard: (state) => state.dashboard,
  },
  actions: {
    async FectgetDashboard({ commit }) {
      try {
        const response = await axios.get(
          "https://ecommerce.olipiskandar.com/api/v1/user/dashboard",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        commit("SET_DASHBOARD", response.data);
      } catch (error) {
        alert("eror api dashboard");
      }
    },
  },
  mutations: {
    SET_DASHBOARD(state, dashboard) {
      state.dashboard = dashboard;
    },
  },
};
