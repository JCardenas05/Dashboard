<?php
// Ejecuta el comando arp
$output = shell_exec('arp -a');

// Divide la salida en líneas
$lines = explode("\n", $output);

// Estructura para almacenar los datos procesados
$arpEntries = [];

// Procesa cada línea usando expresiones regulares
foreach ($lines as $line) {
    if (preg_match('/(\S*)\s*\((.*?)\)\s+at\s+(.*?)\s+\[(.*?)\]\s+on\s+(.*)/', $line, $matches)) {
        // Solo agrega los que están en wlan0
        if($matches[5] == 'wlan0') {
            $arpEntries[] = [
                'name' => $matches[1] == '?' ? 'Unknown' : $matches[1],
                'ip' => $matches[2],
                'mac' => $matches[3],
                'type' => $matches[4],
                'interface' => $matches[5]
            ];
        }
    }
}

// Devuelve los datos en formato JSON
echo json_encode($arpEntries);
?>

