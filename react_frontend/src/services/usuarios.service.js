import axios from "axios";
import { API_URL } from "../constants/constants";

const getAll = async () => {
    try {
        const response = await axios.get(`${API_URL}/obtenerTodos`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}

// data = {nombre: "", apellido: ""}
const getByFilters = async (data) => {
    try {
        const response = await axios.get(`${API_URL}/byFilters?nombre=${data.nombre}&apellido=${data.apellido}`);
        console.log(response.data)
        return response.data; // [{}, {}] registros filtrados
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}

const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/usuarioABorrar?id=${id}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}

const usuariosServices = {
    getAll,
    getByFilters,
    deleteUser
}

export { usuariosServices }