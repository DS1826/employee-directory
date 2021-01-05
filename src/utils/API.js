import axios from "axios";

// Export object containing methods we'll use for accessing Random User API

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUsers: function() {
        return axios.get("https://randomuser.me/api/?results=100&nat=US");
    }
};