function obtenerTemperatura() {
    fetch('temperatura.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperatura').innerText = `Temperatura: ${data.temperatura.toFixed(3)} °C`;
        })
        .catch(error => console.error('Error:', error));
}

function list_dispositivos(){
    fetch('dispositivos.php')
    .then(response => response.json())
    .then(data => {
        const tabla = document.getElementById('dispositivos').getElementsByTagName('tbody')[0];
        tabla.innerHTML = '';

        data.forEach(dispositivo => {
            let fila = tabla.insertRow();
            fila.insertCell().textContent = dispositivo.name;
            fila.insertCell().textContent = dispositivo.ip;
            fila.insertCell().textContent = dispositivo.mac;
            fila.insertCell().textContent = dispositivo.type;
            fila.insertCell().textContent = dispositivo.interface;
        });
    });
}

function obtener_f() {
    fetch('clock_cpu.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('cpu').innerText = `CPU GHz: ${data.f_cpu.toFixed(4)} GHz`;
        })
        .catch(error => console.error('Error:', error));
}

// Llama a obtenerTemperatura cada 2 segundos
setInterval(obtenerTemperatura, 2000); // 2000 milisegundos = 2 segundos
setInterval(list_dispositivos,5000);
setInterval(obtener_f, 2000); 






