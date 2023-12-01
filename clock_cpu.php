<?php
header('Content-Type: application/json');

// Lee la frecuencia actual de la CPU
$freq = file_get_contents('/sys/devices/system/cpu/cpu0/cpufreq/scaling_cur_freq');

// Asegúrate de que $freq es numérico y conviértelo a un número
//$freq = is_numeric($freq) ? floatval($freq) : 0;
$freq = floatval($freq)
// Convierte la frecuencia a GHz (dividiendo por 1.000.000.000)
$f_cpu = $freq / 1000000000;

// Devuelve los datos en formato JSON
echo json_encode(["f_cpu" => $f_cpu]);
?>
