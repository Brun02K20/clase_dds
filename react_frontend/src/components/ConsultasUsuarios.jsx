import React, { useEffect, useState } from "react";
import Filtro from "./Filtro";
import Tabla from "./Tabla";
import { usuariosServices } from "../services/usuarios.service";

export default function ConsultasUsuarios() {
  const [rows, setRows] = useState([]); // almacenar lo de la API

  // traigo los datos y los seteo
  async function fetchData() {
    setRows(await usuariosServices.getAll());
  }

  // unicamente la primer evz que se muestre el componente
  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteUser = async (id) => {
    await usuariosServices.deleteUser(id);
    await fetchData(); // Obtener los datos actualizados después de eliminar el usuario
  };

  return (
    <>
      <div className="row">
        <Filtro setRows={setRows} />
      </div>
      <div className="row">
        <Tabla rows={rows} handleDeleteUser={handleDeleteUser} />
      </div>
    </>
  );
}
