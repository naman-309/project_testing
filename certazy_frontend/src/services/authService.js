import api from "./api";

/**
 * authService.js
 *
 * Backend base .env se aata hai: /api/v1
 * Isliye yahan sirf /auth/... se shuru hone wale endpoints rahenge.
 */

const authService = {
    // Local auth
    register: (data) => api.post("/auth/register", data),
    login: (data) => api.post("/auth/login", data),
    refresh: () => api.post("/auth/refresh"),
    logout: () => api.post("/auth/logout"),
    changePassword: (data) => api.post("/auth/change-password", data),
    updateProfile: (data) => api.put("/auth/profile", data),
    me: () => api.get("/auth/me"),

    // OAuth — browser redirect
    googleLogin: () => {
        window.location.href = "http://localhost:5000/api/v1/auth/google";
    },
    githubLogin: () => {
        window.location.href = "http://localhost:5000/api/v1/auth/github";
    },

    // Admin
    getAllUsers: () => api.get("/auth/users/all"),
    getUserById: (id) => api.get(`/auth/users/${id}`),
    updateUserStatus: (id, data) => api.put(`/auth/users/${id}/status`, data),
};

export default authService;