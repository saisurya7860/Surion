import api from "./axios.js";

export const getSkills = async()=>{
    const res = await api.get("/skill-categories");
    return res.data;
}