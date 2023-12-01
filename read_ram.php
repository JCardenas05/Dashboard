<?php
header('Content-Type: application/json');

// Lee los datos de /proc/meminfo
$data = file_get_contents('/proc/meminfo');

// Divide la salida en líneas
$lines = explode("\n", $data);

// Inicializa las variables para la memoria total y libre
$memFree = 0;
$memTotal = 0;

foreach ($lines as $line) {
    if (strpos($line, 'MemFree:') === 0) {
        // Extrae el valor numérico de la línea para la memoria libre
        sscanf($line, "MemFree: %d kB", $memFree);
    } else if (strpos($line, 'MemTotal:') === 0) {
        // Extrae el valor numérico de la línea para la memoria total
        sscanf($line, "MemTotal: %d kB", $memTotal);
    }
}

// Calcula la memoria utilizada
$memUsed = $memTotal - $memFree;

// Devuelve la memoria utilizada en formato JSON
echo json_encode(["memUsed" => $memUsed/1000]);
?>
