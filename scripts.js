function obtenerTemperatura() {
    fetch('temperatura.php')
        .then(response => response.json())
        .then(data => {
            const temperatura = data.temperatura.toFixed(3);
            document.getElementById('temperature').innerText = `Temperatura: ${temperatura} °C`;
            // Actualiza la barra de progreso de la temperatura
            const progressTemp = document.getElementById('temperature_');
            progressTemp.value = temperatura; // Asume que tienes un máximo definido en tu HTML
        })
        .catch(error => console.error('Error:', error));
}

function obtener_f() {
    fetch('clock_cpu.php')
        .then(response => response.json())
        .then(data => {
            const f_cpu = data.f_cpu.toFixed(2);
            document.getElementById('cpu').innerText = `CPU GHz: ${f_cpu} GHz`;
            // Actualiza la barra de progreso de la CPU
            const progressCpu = document.getElementById('cpu_');
            progressCpu.value = f_cpu; // Convierte GHz a MHz para la barra de progreso
        })
        .catch(error => console.error('Error:', error));
}

function read_ram() {
    fetch('read_ram.php')
        .then(response => response.json())
        .then(data => {
            const memUsed = data.memUsed.toFixed(3);
            document.getElementById('ram').textContent = `Memoria Utilizada: ${memUsed} MB`;
            // Actualiza la barra de progreso de la RAM
            const progressRam = document.getElementById('ram_');
            progressRam.value = memUsed; // Asume que tienes un máximo definido en tu HTML
        })
        
        .catch(error => {
            console.error('Error al obtener datos de memoria:', error);
        });
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

function reload_point(){
    fetch('restart_acces.php')
}
function reload_server(){
    fetch('restart_server.php')
}

function updateWifiSettings() {
    var ssid = document.getElementById("ssid").value;
    var password = document.getElementById("password").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "change_credentials.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("ssid=" + ssid + "&password=" + password);
}

function update_soft(){
    fetch('actualizar.php')
}

// Llama a obtenerTemperatura cada 2 segundos
setInterval(obtenerTemperatura, 2000); // 2000 milisegundos = 2 segundos
setInterval(list_dispositivos,5000);
setInterval(obtener_f, 2000); 
setInterval(read_ram,2000)


// ... Resto de tu código ...

// Llama a las funciones cada cierto tiempo
setInterval(obtenerTemperatura, 2000); // 2000 milisegundos = 2 segundos
setInterval(obtener_f, 2000); 
setInterval(read_ram, 2000);
