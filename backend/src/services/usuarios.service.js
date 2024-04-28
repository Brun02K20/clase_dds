import sequelize from "../databases/databases.js";

// obtener todos los usuarios
const getAll = async () => {
    const allUsuarios = await sequelize.models.Usuarios.findAll()
    return allUsuarios.map(usuario => usuario.dataValues)
}

const getById = async (id) => {
    const usuario = await sequelize.models.Usuarios.findByPk(id)
    return usuario.dataValues
}

const createUser = async (body) => {
    const usuarioACrear = await sequelize.models.Usuarios.create({
        nombre: body.nombre,
        apellido: body.apellido,
        usuario: body.usuario,
        password: body.password,
        email: body.email
    })
    return usuarioACrear.dataValues
}

const updateUser = async (idUsuario, body) => {
    const userToUpdate = await sequelize.models.Usuarios.findByPk(idUsuario)
    if (!userToUpdate) { // si no existe tiro error
        throw new Error("Error, no existe ese usuario")
    }

    userToUpdate.nombre = body.nombre
    userToUpdate.apellido = body.apellido
    userToUpdate.usuario = body.usuario
    userToUpdate.password = body.password
    userToUpdate.email = body.email

    await userToUpdate.save()
    return userToUpdate.dataValues
}

const deleteUser = async (idUsuario) => {
    const userToDelete = await sequelize.models.Usuarios.findByPk(idUsuario) // busco usuario
    if (!userToDelete) { // si no existe tiro error
        throw new Error("Error, no existe ese usuario")
    }

    await userToDelete.destroy() // si existe lo borro
}

const usersServices = {
    getAll,
    getById,
    createUser,
    updateUser,
    deleteUser
}

export { usersServices }