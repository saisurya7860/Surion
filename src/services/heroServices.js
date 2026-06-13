import api from "./axios.js";

export const getAbout = async () => {
    const res = await api.get("/about");
    return res.data;
}
