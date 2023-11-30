function obtenerTemperatura() {
    fetch('temperatura.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperatura').innerText = `Temperatura: ${data.temperatura.toFixed(3)} °C`;
        })
        .catch(error => console.error('Error:', error));
}

// Llama a obtenerTemperatura cada 2 segundos
setInterval(obtenerTemperatura, 2000); // 2000 milisegundos = 2 segundos






