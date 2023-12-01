function obtenerTemperatura() {
    fetch('temperatura.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperatura').innerText = `Temperatura: ${data.temperatura.toFixed(3)} °C`;
        })
        .catch(error => console.error('Error:', error));
}

function list_dispositivos(){
        // Hacer una solicitud para obtener los datos de dispositivos
        fetch('dispositivos.php')
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById('dispositivos').getElementsByTagName('tbody')[0];
    
            // Vaciar el cuerpo de la tabla por si tiene contenido previo
            tabla.innerHTML = '';
    
            // Iterar sobre cada dispositivo y agregar una fila a la tabla
            data.forEach(dispositivo => {
                let fila = tabla.insertRow();
                fila.insertCell().textContent = dispositivo.ip;
                fila.insertCell().textContent = dispositivo.mac;
                fila.insertCell().textContent = dispositivo.type;
                fila.insertCell().textContent = dispositivo.interface;
            });
        });
}

// Llama a obtenerTemperatura cada 2 segundos
setInterval(obtenerTemperatura, 2000); // 2000 milisegundos = 2 segundos






