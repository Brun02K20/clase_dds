import express from "express"
import { usersServices } from "../services/usuarios.service.js"

const router = express.Router() // en este router defino ENDPOINTS
router.get("/obtenerTodos", async (req, res) => {
    try {
        const usuarios = await usersServices.getAll()
        console.log("users: ", usuarios)
        res.json(usuarios)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Oops, algo malio sal" })
    }
})

// PATH PARAM
router.get("/obtenerById/:id", async (req, res) => {
    try {
        const usuario = await usersServices.getById(req.params.id)
        res.json(usuario)
    } catch (error) {
        res.status(500).json({ error: "Oops, algo malio sal" })
    }
})

router.post("/crearUsuario", async (req, res) => {
    try {
        const usuario = await usersServices.createUser(req.body)
        res.json(usuario)
    } catch (error) {
        res.status(500).json({ error: "Oops, algo malio sal" })
    }
})

// TAREA: HACER UN GET BY FILTER DE USUARIOS (EL FILTRO LO DECIDEN UDS) (SOLO BACKEND)

// QUERY PARAM
router.delete("/usuarioABorrar", async (req, res) => {
    const { id } = req.query
    try {
        const response = await usersServices.deleteUser(id)
        return res.json(response)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

router.put("/modificar", async (req, res) => {
    const { id } = req.query
    try {
        const response = await usersServices.updateUser(id, req.body)
        return res.json(response)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

const usuariosRouter = {
    router
}

export { usuariosRouter }