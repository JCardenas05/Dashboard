<?php
header('Content-Type: application/json');

// Función para obtener el valor de memoria desde /proc/meminfo
function getMemoryInfo($key) {
    $data = file_get_contents('/proc/meminfo');
    $lines = explode("\n", $data);

    foreach ($lines as $line) {
        if (strpos($line, $key) === 0) {
            // Divide la línea por espacios y devuelve el segundo elemento
            list(, $memValue,) = explode(" ", trim($line), 3);
            return intval($memValue);
        }
    }

    return 0;
}

// Obtener la memoria total y libre
$memTotal = getMemoryInfo('MemTotal');
$memFree = getMemoryInfo('MemFree');

// Calcular la memoria utilizada
$memUsed = $memTotal - $memFree;

// Devuelve los datos en formato JSON
echo json_encode([
    "total_memory_kb" => $memTotal,
    "free_memory_kb" => $memFree,
    "used_memory_kb" => $memUsed
]);
?>
