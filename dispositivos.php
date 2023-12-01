<?php
// Ejecuta el comando arp
$output = shell_exec('arp -a');

// Divide la salida en líneas
$lines = explode("\n", $output);

// Estructura para almacenar los datos procesados
$arpEntries = [];

// Procesa cada línea usando expresiones regulares
foreach ($lines as $line) {
    if (preg_match('/\((.*?)\)\s+at\s+(.*?)\s+\[(.*?)\]\s+on\s+(.*)/', $line, $matches)) {
        // Agrega la información a la estructura de datos
        $arpEntries[] = [
            'ip' => $matches[1],
            'mac' => $matches[2],
            'type' => $matches[3],
            'interface' => $matches[4]
        ];
    }
}

// Devuelve los datos en formato JSON
echo json_encode($arpEntries);
?>
