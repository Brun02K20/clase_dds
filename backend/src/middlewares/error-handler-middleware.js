import { ModificationError } from "../errors/modification-error.js";
import { ResourceNotFound } from "../errors/resource-not-found-error.js";
import { ValidationError } from "sequelize";

const errorHandler = (error, req, res, next) => {
    console.log("entro al middleware de errores: ", error);
    if (error instanceof ResourceNotFound) {
        return res.status(error.status).json({ error: error.message });
    }

    if (error instanceof ModificationError) {
        return res.status(error.status).json({ error: error.message });
    }

    if (error instanceof ValidationError) {
        return res.status(400).json({ error: error.message });
    }

    console.log(error);
    return res.status(500).json({ error: 'Error imprevisto' });
};

export default errorHandler;
