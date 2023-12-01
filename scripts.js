function obtenerTemperatura() {
    fetch('temperatura.php')
        .then(response => response.json())
        .then(data => {
            const temperatura = data.temperatura.toFixed(3);
            document.getElementById('temperatura').innerText = `Temperatura: ${temperatura} °C`;
            // Actualiza la barra de progreso de la temperatura
            const progressTemp = document.querySelector('.progress .temperature');
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
            const progressCpu = document.querySelector('.progress .cpu');
            progressCpu.value = f_cpu * 1000; // Convierte GHz a MHz para la barra de progreso
        })
        .catch(error => console.error('Error:', error));
}

function read_ram() {
    fetch('read_ram.php')
        .then(response => response.json())
        .then(data => {
            const memUsed = data.memUsed.toFixed(3);
            document.getElementById('used').textContent = `Memoria Utilizada: ${memUsed} MB`;
            // Actualiza la barra de progreso de la RAM
            const progressRam = document.querySelector('.progress .ram');
            progressRam.value = memUsed; // Asume que tienes un máximo definido en tu HTML
        })
        .catch(error => {
            console.error('Error al obtener datos de memoria:', error);
        });
}

// ... Resto de tu código ...

// Llama a las funciones cada cierto tiempo
setInterval(obtenerTemperatura, 2000); // 2000 milisegundos = 2 segundos
setInterval(obtener_f, 2000); 
setInterval(read_ram, 2000);
