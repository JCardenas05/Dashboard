<?php
header('Content-Type: application/json');

// Lee la frecuencia actual de la CPU
$freq = file_get_contents('/sys/devices/system/cpu/cpu0/cpufreq/scaling_cur_freq');
$f_cpu = floatval($freq) / 1000000;

// Devuelve los datos en formato JSON
echo json_encode(["f_cpu" => $f_cpu]);
?>
