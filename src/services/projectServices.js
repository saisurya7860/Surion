import api from "./axios.js";

export const getProjects = async()=>{
    const res = await api.get("/project");
    return res.data;
}