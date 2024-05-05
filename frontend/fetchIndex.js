document.addEventListener("DOMContentLoaded", function () {
    fetchData();
    const form = document.getElementById('filterForm');
    // aca se detiene hasta que pase algo

    // cuando el tipo pulse ENVIAR, se ejecuta todo lo de aca adentro
    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // se usa en formularios para evitar que se recargue la pagina

        console.log(form.nombre.value);
        console.log(form.apellido.value);

        try {
            const response = await fetch(`http://localhost:4001/usuarios/byFilters?nombre=${form.nombre.value}&apellido=${form.apellido.value}`)
            const data = await response.json();

            const tbody = document.getElementById("tablita")
            tbody.innerHTML = ''; // Limpiar filas existentes antes de agregar nuevas
            data.forEach(user => { // recorro el array creando filas
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${user.nombre}</td>
                <td>${user.apellido}</td>
                <td>${user.usuario}</td>
                <td>${user.email}</td>
            `;
                tbody.appendChild(row);
            });
        } catch (error) {
            console.log(error);
        }
    })

})

async function fetchData() {
    try {
        const response = await fetch('http://localhost:4001/usuarios/obtenerTodos') // hago la peticion al endpoint
        const data = await response.json(); // parseo las respuestas a un array
        const tbody = document.getElementById('tablita'); // elijo el cuerpo de la tabla
        tbody.innerHTML = ''; // Limpiar filas existentes antes de agregar nuevas
        data.forEach(user => { // recorro el array creando filas
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.nombre}</td>
                <td>${user.apellido}</td>
                <td>${user.usuario}</td>
                <td>${user.email}</td>
            `;
            tbody.appendChild(row);
        });

    } catch (error) {
        console.error(error);
    }
}