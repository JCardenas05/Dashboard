<?php
// Ejecuta el comando arp
$output = shell_exec('arp -a');

// Convierte la salida a una estructura de datos (puedes usar expresiones regulares o manipulación de strings)
// ...

// Devuelve los datos en formato JSON
echo json_encode($output);
?>
