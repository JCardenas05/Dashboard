<?php
// Ejecuta el comando arp
$output = shell_exec('arp -a');

// Inicializa un array para almacenar los datos de ARP
$arpData = array();

// Divide la salida en líneas
$lines = explode("\n", $output);

// Recorre las líneas para procesar la información
foreach ($lines as $line) {
    // Elimina espacios en blanco en exceso
    $line = trim($line);

    // Ignora las líneas que no contienen información relevante
    if (empty($line) || strpos($line, 'Interface:') !== false) {
        continue;
    }

    // Divide cada línea en partes (IP, dirección MAC, tipo)
    $parts = preg_split('/\s+/', $line, -1, PREG_SPLIT_NO_EMPTY);

    if (count($parts) == 3) {
        // Estructura la información en un array asociativo
        $arpEntry = array(
            "ip" => $parts[0],
            "mac" => $parts[1],
            "type" => $parts[2]
        );

        // Agrega la entrada ARP al array de datos
        $arpData[] = $arpEntry;
    }
}

// Devuelve los datos en formato JSON
echo json_encode($arpData);
?>
