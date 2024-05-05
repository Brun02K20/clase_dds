document.addEventListener("DOMContentLoaded", async function () {
    // paso 1: capturar el elemento a modificar
    const boton = document.getElementById("botonHaceAlgo")

    // segundo paso: hacer el evento
    boton.addEventListener("click", function () {
        alert("SOY UN BOTON")
    })

    const datos = [
        {
            id: 1,
            nombre: "Juan"
        },
        {
            id: 2,
            nombre: "Pepe"
        },
        {
            id: 3,
            nombre: "Marta"
        }
    ]

    // primer paso: capturar el cuerpo de tabla
    const cuerpoTabla = document.getElementById("cuerpo_tabla")

    // segundo paso: vaciar la tabla si es necesario
    cuerpoTabla.innerHTML = ``
    datos.forEach((elemento) => {
        const row = document.createElement('tr'); // table row
        row.innerHTML = `
                <td>${elemento.id}</td>
                <td>${elemento.nombre}</td>
        `
        cuerpoTabla.appendChild(row)
    })
})