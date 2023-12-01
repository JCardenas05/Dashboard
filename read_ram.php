<?php
header('Content-Type: application/json');

// Lee los datos de /proc/meminfo
$data = file_get_contents('/proc/meminfo');

// Divide la salida en líneas
$lines = explode("\n", $data);

// Busca la línea que contiene "MemFree"
$memFree = 0;
foreach ($lines as $line) {
    if (strpos($line, 'MemFree:') === 0) {
        // Extrae el valor numérico de la línea
        sscanf($line, "MemFree: %d kB", $memFree);
        break;
    }
}

// Devuelve solo la memoria libre en formato JSON
echo json_encode(["memFree" => $memFree/1000]);
?>

