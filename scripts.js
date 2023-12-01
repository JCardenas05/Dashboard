function obtenerTemperatura() {
    fetch('temperatura.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperatura').innerText = `Temperatura: ${data.temperatura.toFixed(3)} °C`;
        })
        .catch(error => console.error('Error:', error));
}

function list_dispositivos(){
    fetch('list_dispositivos.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dispositivos').innerText = `Dispositivos: ${data.dispositivos}`;
        })
        .catch(error => console.error('Error:', error));
}

// Llama a obtenerTemperatura cada 2 segundos
setInterval(obtenerTemperatura, 2000); // 2000 milisegundos = 2 segundos






