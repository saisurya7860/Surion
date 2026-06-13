import api from "./axios.js";

export const getLinks = async () => {
    const res = await api.get("/social-links");
    return res.data;
}