import api from "./axios";

export const getEducations = async() =>{
    const res = await api.get("/education");
    return res.data;
}